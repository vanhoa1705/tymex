import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

import { RootStore } from '@/stores'

export const useStores = () => useContext(MobXProviderContext) as RootStore
