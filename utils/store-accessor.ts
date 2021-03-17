/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AuthModule from '~/store/modules/auth'
import StatusesModule from '~/store/modules/statuses'
import PatientsModule from '~/store/modules/patients'
import NursesModule from '~/store/modules/nurses'
import UtilsModule from '~/store/modules/utils'

let authStore: AuthModule
let statusesStore: StatusesModule
let patientsStore: PatientsModule
let nursesStore: NursesModule
let utilsStore: UtilsModule

function initialiseStores(store: Store<any>): void {
  authStore = getModule(AuthModule, store)
  statusesStore = getModule(StatusesModule, store)
  patientsStore = getModule(PatientsModule, store)
  nursesStore = getModule(NursesModule, store)
  utilsStore = getModule(UtilsModule, store)
}

export {
  initialiseStores,
  authStore,
  statusesStore,
  patientsStore,
  nursesStore,
  utilsStore,
}
