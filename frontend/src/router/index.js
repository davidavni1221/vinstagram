import { createRouter, createWebHashHistory } from 'vue-router'
import storyAdd from '../views/story-add.vue'
import storyApp from '../views/story-app.vue'
import userPage from '../views/user-page.vue'
// import storyEdit from '../views/story-edit.vue'
import comments from '../views/comments.vue'
// import storyDetails from '../views/story-details.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
   
    {
      path: '/story',
      name: 'story-app',
      component: storyApp,
      children:[
        {
          path: 'comments/:storyId',
          component: comments,
        },
        {
          path: '/add',
          component: storyAdd,
        }

      ]
    },
    {
      path: '/user-page',
      name: 'user-page',
      component: userPage,
      children:[
      {
        path: 'comments/:storyId',
        component: comments,
      }]
  }
  
    
  
  ],
})

export default router
