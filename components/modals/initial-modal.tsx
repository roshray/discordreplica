"use client"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog" 

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, 
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button} from "@/components/ui/button"

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Server name is required"
    }),
    imageUrl: z.string().min(1,{
        message: "server image is required"
    })
})


export const InitialModal = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
        
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        console.log(values)
    }



    return (
      <Dialog open>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">
                    Customize a server
                </DialogTitle>
                <DialogDescription className="text-center text-zinc-500">
                    Give your server a personality a name and an image. You can always change it later.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-8"
                >
                    <div className="space-y-8 px-6">
                        <div className="flex items-center justify-center text-center">
                            TODO: Image Upload
                        </div>
                    </div>
                </form>
            </Form>
        </DialogContent>
      </Dialog> 
    )
}