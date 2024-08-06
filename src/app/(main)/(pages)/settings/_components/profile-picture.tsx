'use client'

import React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
// import { SimpleUploadButton } from "@/components/global/upload-button"

// Get the image upload thing working

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload?: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }
  console.log(userImage)

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[15vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User Image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X />
              Remove Profile Photo
            </Button>
          </>
        ) : (
          // Uploadthing button
          // <SimpleUploadButton onUpload={onUpload} />
          <div>No image i guess...</div>
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
