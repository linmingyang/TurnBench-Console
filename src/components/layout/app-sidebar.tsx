import { useEffect, useState } from 'react'
import { useLocation, useRouter } from '@tanstack/react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { sidebarData } from './data/sidebar-data'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [showBar, setShowSidebar] = useState(true)
  const router = useRouter()
  const location = useLocation()

  useEffect(() => {
    // 这里可以执行你的业务逻辑，比如跟踪页面访问、更新页面标题等
    const path = location.pathname
    console.log('当前路由路径:', path)
    // 判断是否为 start-game 或 session-detail 路由
    if (path.startsWith('/start-game') || path.startsWith('/session-detail') || path.startsWith('/games')) {
      setShowSidebar(false)
    } else {
      setShowSidebar(true)
    }
  }, [location]);

  return (
    <div className='flex flex-col'>
      {/* Sidebar占据剩余空间 */}
      <div className='flex flex-1'>
        {showBar && (
          <Sidebar collapsible='icon' variant='floating' {...props}>
            
            <SidebarContent>
              {sidebarData.navGroups.map((props) => (
                <NavGroup key={props.title} {...props} />
              ))}
            </SidebarContent>
            <SidebarFooter>
              <button
                className='bg-primary mt-2 w-full rounded py-2 text-white'
                onClick={() => {
                  setShowSidebar(false)
                  router.navigate({ to: '/start-game' }) // 替换为你的新页面路由
                }}
              >
                Start Game
              </button>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
        )}
      </div>
    </div>
  )
}
