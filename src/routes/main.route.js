import MainHomeComponent from '../components/Home.vue';
import HomeEventComponent from '../components/views-event-emitter/HomeEvent.vue';
import HomeStoreComponent from '../components/views-store/HomeStore.vue';

const routes = [
  {
    path:'',
    component: MainHomeComponent,
    redirect:'todo-event-emitter',
    children : [
      {
        path: 'todo-event-emitter',
        component: HomeEventComponent,
        name: 'todo-event-emitter'
      },
      {
        path: 'todo-store',
        component: HomeStoreComponent,
        name: 'todo-store'
      }
    ]
  }
]

export default routes