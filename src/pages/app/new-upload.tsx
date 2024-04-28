import { Button } from "@/components/ui/button";
import { FolderSearch, Upload } from "lucide-react";
import { useState, ChangeEvent, useMemo, FormEvent } from "react";

export function NewUpload() {
  const [videoFile, setVideoFile] = useState<File | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return;
    }

    const selectedFile = files[0]

    setVideoFile(selectedFile)
  }

  const previewURL = useMemo(() => {
    if (!videoFile) {
      return null;
    }

    return URL.createObjectURL(videoFile);
  }, [videoFile])

  async function handleUploadVideo(event: FormEvent) {
    event.preventDefault()

    if (!videoFile) {
      return null;
    }

    alert('Enviando...')

  }

  return (
    <form onSubmit={handleUploadVideo} className="flex flex-1 flex-col gap-4 items-center justify-center">
      <label
        htmlFor="media"
        className="w-80 h-40 border border-dashed flex flex-col rounded-lg aspect-video cursor-pointer gap-4 items-center justify-center border-zinc-800"
      >
        {previewURL ? (
          <video
            src={previewURL}
            controls={false}
            className="pointer-events-none inset-0 w-full h-full"
          />
        ) : (
          <>
            <div className="border border-zinc-700 px-2 py-1 rounded-xl bg-zinc-800">
              <FolderSearch
                className="size-4 text-white"
              />
            </div>
            <span className="text-sm text-zinc-500">Selecione um vídeo</span>
          </>
        )}
      </label>

      <input
        onChange={onFileSelected}
        accept="video/mp4"
        type="file"
        name="media"
        id="media"
        className="invisible h-0 w-0"
      />

      <Button
        className="w-80 gap-4"
        disabled={previewURL ? false : true}
      >
        Carregar vídeo
        <Upload className="size-4" />
      </Button>
    </form>
  )
}