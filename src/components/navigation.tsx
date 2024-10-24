
'use client'

import { cn } from '@/lib/utils'
import { Settings, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id'
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from 'react-icons/go'

const routes = [
  { label: 'Home', href: '', icon: GoHome, activeIcon: GoHomeFill },
  { label: 'All Tasks', href: '/tasks', icon: GoCheckCircle, activeIcon: GoCheckCircleFill },
  { label: 'Settings', href: '/settings', icon: Settings, activeIcon: Settings },
  { label: 'Members', href: '/members', icon: UsersIcon, activeIcon: UsersIcon },
]


export const Navigation = () => {
  const workspaceId = useWorkspaceId()
  const pathname = usePathname()

  return (
    <ul className='flex flex-col'>
      {routes.map((item) => {
        const fullHref = `/workspaces/${workspaceId}${item.href}`
        const isActive = pathname === fullHref
        const Icon = isActive ? item.activeIcon : item.icon

        return (
          <Link key={item.href} href={fullHref}>
            <div className={cn(
              'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
              isActive && 'bg-white shadow-sm hover:opacity-100 text-primary'
            )}>
              <Icon className={cn('size-5 text-neutral-500', isActive && 'text-blue-600')} />
              {item.label}
            </div>
          </Link>
        )
      })}
    </ul>
  )
}
