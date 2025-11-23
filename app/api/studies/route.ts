import { NextResponse } from 'next/server'
// import { createClient } from '@/lib/supabase/server'

export async function GET() {
  // Placeholder: Fetch studies from Supabase
  // const supabase = await createClient()
  // const { data, error } = await supabase.from('studies').select('*')
  
  return NextResponse.json({
    message: 'Placeholder API route for studies',
    data: []
  })
}

export async function POST() {
  // Placeholder: Create a new study (admin only)
  // const body = await request.json()
  // const supabase = await createClient()
  // const { data, error } = await supabase.from('studies').insert(body)
  
  return NextResponse.json({
    message: 'Placeholder API route for creating studies',
    data: null
  })
}
