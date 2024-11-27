<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/counter';
import { storeToRefs, createPinia } from 'pinia';

const pini = createPinia();
const store = useUserStore();
const { thecounter } = storeToRefs(store);
const therouter = useRouter();
const customConfig = {
  Authorization: 'Bearer' + store.token,
};

function logout() {
  axios({ url: 'http://localhost/perpus/public/api/logout', method: 'get', headers: customConfig })
    .then((response) => {
      console.log(response.data.success === true);
      {
        store.reset();
        therouter.push('/');
      }
    })
    .catch((error) => {
      console.log('AJAX' + error);
    })
    .finally();
}
</script>
