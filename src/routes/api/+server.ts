import { json } from "@sveltejs/kit"
import type ApiResponse from "$lib/types/api-response"

export function GET() {
    return json(<ApiResponse>{
        context: "api",
        status: true,
        message: "The API is up and running!",
    })
}
