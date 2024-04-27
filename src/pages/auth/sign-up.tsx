import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { twMerge } from "tailwind-merge";

export function SignUp() {
  return (
    <div className="lg:p-8 text-zinc-50">
      <a
        href="/sign-in"
        className={twMerge(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8',
        )}
      >
        Fazer login
      </a>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-gray-500">
            Entre e aproveite as vantagens do <strong>upload.video</strong>
          </p>
        </div>

        <div className="grid gap-6">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Seu nome</Label>
                <Input
                  id="name"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
              </div>

              <Button type="submit">
                Finalizar cadastro
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}