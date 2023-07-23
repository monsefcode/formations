"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import { badgeVariants } from "@/components/ui/badge";
import { supabaseClient } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { clerkClient, useAuth, useUser } from "@clerk/nextjs";
import { Database } from "@/types/supabase";

export default function Home() {
  const { getToken, userId } = useAuth();

  async function userData() {
    const user = await clerkClient.users?.getUser(userId as string);

    console.log(user);
    return user;
  }

  const [formations, setFormations] = useState([]); // array of formations

  const fetchData = async () => {
    const token = await getToken({ template: "supabase" });

    const supabase = await supabaseClient(token as string);

    let { data, error } = await supabase
      .from("formations")
      .select("*")
      .order("id", { ascending: true });

    return setFormations(data);
  };

  useEffect(() => {
    fetchData();
    userData();
  }, []);

  async function addFormation(formation: any) {
    const token = await getToken({ template: "supabase" });

    const supabase = await supabaseClient(token as string);

    const { data, error } = await supabase.from("formations").insert([
      {
        title: formation.title,
        description: formation.description,
        status: formation.status,
        former_id: formation.former_id,
      },
    ]);

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  }

  return (
    <main className="mt-20">
      <Button
        className="mb-4 align-middle"
        onClick={() => {
          addFormation({
            title: "Formation 2",
            description: "Description 2",
            status: "In progress",
            former_id: userId,
          });
        }}
      >
        <PlusIcon className="w-4 h-4 mr-2" />
        Add a new formation
      </Button>
      <Table>
        <TableCaption>List of all formations</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Former</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formations.map((formation, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {formation.created_at}
              </TableCell>
              <TableCell>{formation.title}</TableCell>
              <TableCell>{formation.description}</TableCell>
              <TableCell>
                <span
                  className={badgeVariants({
                    variant: "outline",
                  })}
                >
                  {formation.status}
                </span>
              </TableCell>
              <TableCell className="text-right">{formation.status}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span aria-hidden>...</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Users</DropdownMenuItem>
                    <DropdownMenuItem>xlxc</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
