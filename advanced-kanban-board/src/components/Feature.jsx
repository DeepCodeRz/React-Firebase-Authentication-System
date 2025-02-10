import { CursorArrowRaysIcon, ViewColumnsIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Drag-and-Drop Task Management',
        description:
            'Easily move tasks between columns with a simple drag-and-drop interface for better organization.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Customizable Columns',
        description:
            'Create and customize columns to match your workflow, whether it’s To-Do, In Progress, or Completed.',
        icon: ViewColumnsIcon,
    },
    {
        name: 'Advanced Task Specifics',
        description:
            'Set priorities, due dates, and reminders to ensure tasks are completed on time and efficiently.',
        icon: AdjustmentsHorizontalIcon,
    },
    {
        name: 'Advanced Search & Filtering',
        description:
            'Quickly find tasks using advanced search options and filters, allowing you to sort by keywords, labels, due dates, or priority.',
        icon: MagnifyingGlassIcon,
    },
]

export default function Feature() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Organize better</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Everything you need to manage your tasks efficiently.
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Our app provides all the tools you need to manage your tasks efficiently, so you can focus on what’s important.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
