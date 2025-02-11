import * as Icons from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Drag-and-Drop Task Management',
        description:
            'Easily move tasks between columns with a simple drag-and-drop interface for better organization.',
        icon: "CursorArrowRaysIcon",
    },
    {
        name: 'Customizable Columns',
        description:
            'Create and customize columns to match your workflow, whether it’s To-Do, In Progress, or Completed.',
        icon: "ViewColumnsIcon",
    },
    {
        name: 'Advanced Task Specifics',
        description:
            'Set priorities, due dates, and reminders to ensure tasks are completed on time and efficiently.',
        icon: "AdjustmentsHorizontalIcon",
    },
    {
        name: 'Advanced Search & Filtering',
        description:
            'Quickly find tasks using advanced search options and filters, allowing you to sort by keywords, labels, due dates, or priority.',
        icon: "MagnifyingGlassIcon",
    },
]

export default function Feature() {
    const featureElements = features.map((feature, index) => {
        const IconComponent = Icons[feature.icon];
        return (
            <div key={index}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <IconComponent className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
        );
    });

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed
                        for business teams like yours</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Organize tasks effortlessly with drag-and-drop boards, custom lists, and seamless workflows. Stay focused, track progress, and get things done with ease! </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {featureElements}
                </div>
            </div>
        </section>
    )
}
