import { Skeleton } from "@/components/ui/skeleton"

type Props = {
  element: "APP_CLIENT" | "EXAMPLE"
}

const SkeletonRenderer = ({ element }: Props) => {
  switch (element) {
    case "APP_CLIENT":
      return (
        <div className='flex size-full flex-col items-center dark:bg-black'>
          <div className="nav w-full flex justify-end gap-x-4 p-4 shadow-sm">
            <Skeleton className='size-6' />
            <Skeleton className='size-6' />
          </div>
          <div className="con w-full max-w-screen-md grow flex flex-col gap-y-4 p-12">
            <Skeleton className='h-8 w-full rounded-xl' />
          </div>
          <div className="fot w-full flex items-center gap-y-2 p-2 flex-col">
            <Skeleton className='h-4 w-[100px]' />
            <Skeleton className='h-4 w-[150px]' />
          </div>
        </div>
      )

    default:
      return <></>
  }
}

export default SkeletonRenderer
