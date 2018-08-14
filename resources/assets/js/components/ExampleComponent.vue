<template>
    <div class="container">

                     สวัสดี <p v-if="currentUser">{{ currentUser.name }}</p>


  <li class="nav-item dropdown" v-if="currentUser">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                {{ currentUser.name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a href="#!" @click.prevent="logout" class="dropdown-item">Logout</a>
                            </div>
                        </li>

    </div>
</template>

<script>
import store from '../store/index';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            logout() {
                this.$store.commit('logout');
window.location.href = 'login/test'
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        }
    }
</script>
