<template>
  <header>
    <div class="header-inner flex">
      <div class="logo">market</div>
      <nav :class="isShow ? 'nav-mobile' : ''">
        <ul class="flex">
          <router-link :to="nav.path" v-for="(nav, i) in navigations" :key="i">
            <li>
              {{ nav.name }}
            </li>
          </router-link>
        </ul>
      </nav>
      <div class="menu cp" @click="menuOpen">
        <v-icon>mdi-menu</v-icon>
      </div>
      <!-- <div class="logout">
        <v-btn @click="doLogout">logout</v-btn>
      </div> -->
    </div>
  </header>
</template>

<script lnag="ts" setup>
import { ref } from "vue";
import { useGlobalStore } from "@/store/GlobalStore";
import Axios from "axios";
import { useRouter } from "vue-router";

const global = useGlobalStore();
const router = useRouter();
// const isShow = ref(false);
const navigations = ref([
  {
    path: "/home",
    name: "home",
  },
  //   {
  //     path: "/movies/:heropy",
  //     name: "movies",
  //   },
  {
    path: "/my_page",
    name: "my",
  },
  {
    path: "/payment",
    name: "payment",
  },
]);

const doLogout = async () => {
  console.log("logout");
  let access_token = localStorage.getItem("access_token");
  const header = {
    Authorization: `Bearer ${access_token}`,
  };
  let res = await Axios.post(
    "https://kapi.kakao.com/v1/user/logout",
    {},
    {
      headers: header,
    }
  );
  if (res.status === 200) {
    router.push("/login");
  }
};

const menuOpen = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
  z-index: 99;

  .header-inner {
    width: 80%;
    height: 60px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-weight: bold;
      text-transform: uppercase;
    }
    nav {
      ul {
        li {
          margin: 0 5px;
          text-transform: uppercase;
        }
      }
    }
    .menu {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    position: fixed;
    .header-inner {
      nav {
        width: 100%;
        height: calc(100vh - 59px);
        position: absolute;
        top: 59px;
        right: -100%;
        background: #ffffff;
        z-index: 99;
        transition: ease 0.5s;
        overflow-x: hidden;
        ul {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          li {
            padding: 2% 0;
            text-align: center;
            a {
              width: 80%;
            }
            &:hover {
              color: rgb(211, 179, 0);
              transition: 0.3s;
            }
          }
        }
      }
      .menu {
        display: block;
      }
      .nav-mobile {
        right: 0;
        transition: ease 0.5s;
      }
    }
  }
}
</style>
