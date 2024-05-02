import { Download, MoreHorizontal, SquarePen, Trash2 } from "lucide-react";

import { IconButton } from "./icon-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function ContextMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton
          transparent
          className="bg-black/70 border border-white/10 rounded-md p-1.5"
        >
          <MoreHorizontal className="size-4 text-zinc-300" />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SquarePen className="mr-2 h-4 w-4" />
            <span>Editar</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Excluir</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}