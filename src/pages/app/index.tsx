import { useState } from "react";

import { IconButton } from "@/components/icon-button";
import { Table } from "@/components/table";
import { TableCell } from "@/components/table/table-cell";
import { TableHeader } from "@/components/table/table-header";
import { TableRow } from "@/components/table/table-row";
import { Status } from "@/components/status-widget";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface File {
  id: string
  name: string
  slug: string
  size: string
  status: "VALID" | "PROCESSING" | "EXPIRED"
  createdAt: string
}

export function Home() {

  const [files, setFiles] = useState<File[]>([
    {
      id: window.crypto.randomUUID(),
      name: "Teste",
      slug: "teste",
      size: "1.32 MB",
      status: "VALID",
      createdAt: "2024-04-15T13:10:36.845Z"
    },
    {
      id: window.crypto.randomUUID(),
      name: "Teste vídeo",
      slug: "teste-video",
      size: "10.0 MB",
      status: "PROCESSING",
      createdAt: "2024-04-13T13:10:36.845Z"
    },
    {
      id: window.crypto.randomUUID(),
      name: "Teste Chrome",
      slug: "teste-chrome",
      size: "27.42 MB",
      status: "EXPIRED",
      createdAt: "2024-04-15T13:10:36.845Z"
    },
  ])

  if (files.length === 0) {
    return (
      <div className="flex flex-1 flex-col gap-4 items-center justify-center text-base font-bold text-zinc-500">
        <span>Ainda não existem arquivos para exibir.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-xl font-bold">Uploads</h1>
        <div className="px-3 w-72 py-1.5 border border-dashed border-zinc-700 rounded-full flex items-center gap-3">
          <Search className="size-4 text-zinc-500" />
          <input
            className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar uploads..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader>Vídeo</TableHeader>
            <TableHeader>Duração</TableHeader>
            <TableHeader>Tamanho</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Enviado há</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => {
            return (
              <TableRow key={file.id}>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-sm text-zinc-300">
                      {file.name}
                    </span>
                    <span>{file.slug}</span>
                  </div>
                </TableCell>
                <TableCell>12:37</TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>
                  <Status status={file.status} />
                </TableCell>
                <TableCell>{dayjs().to(file.createdAt)}</TableCell>
                <TableCell>
                  <IconButton
                    transparent
                    className="bg-black/70 border border-white/10 rounded-md p-1.5"
                  >
                    <MoreHorizontal className="size-4 text-zinc-300" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell className="text-zinc-500" colSpan={3}>
              Exibindo {files.length} de 38 itens
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span className="text-zinc-500">
                  Página 1 de 2
                </span>

                <div className="flex gap-1.5">
                  <IconButton disabled>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton disabled>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}