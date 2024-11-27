<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/counter';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const therouter = useRouter();
const auth = ref(null);
const username = ref('');
const password = ref('');
const store = useUserStore();

const customConfig = {
  'Content-Type': 'application/json',
};

const bodyParameters = computed(() => {
  return { email: username.value, password: password.value };
});

function login() {
  axios({ url: 'http://localhost/perpus/public/api/login', method: 'post', data: bodyParameters.value, headers: customConfig }).then((response) => {
    auth.value = response.data;
    console.log(response.data);
    if (auth.value.success === true) {
        store.email = username.value
        store.token = auth.value.data
        store.thecounter++
        therouter.push('/menu')
    }
  });
  .catch(error => {
    console.log('AJAX' + error)
  })
  .finally()
}
</script>
