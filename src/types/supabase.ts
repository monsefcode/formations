export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      formations: {
        Row: {
          created_at: string
          description: string | null
          former_id: string | null
          id: number
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          former_id?: string | null
          id?: number
          status?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          former_id?: string | null
          id?: number
          status?: string | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
