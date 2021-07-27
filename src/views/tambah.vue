<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <router-link
          :to="{ name: 'index' }"
          class="btn btn-primary btn-sm shadow rounded mb-4"
        >
          Kembali
        </router-link>

        <div class="row">
          <form @submit.prevent="tambah()">
            <div class="mb-3">
              <label for="">Caption</label>
              <input type="text" class="form-control" v-model="inputane.caption"/>
              <div class="text-danger">pesan validasi</div>
            </div>
            <div class="mb-3">
              <label for="">Ref</label>
              <input type="text" class="form-control"  v-model="inputane.ref"/>
              <div class="text-danger">pesan validasi</div>
            </div>
            <div class="mb-3">
              <label for="">Kategori</label>
              <input type="text" class="form-control"  v-model="inputane.kategori"/>
              <div class="text-danger">pesan validasi</div>
            </div>
            <button class="btn btn-outline-primary">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    //data binding
    const inputane = reactive({
      caption: "",
      ref: "",
      kategori: "",
    });

    //tampung untuk validasi
    const validasi = ref([]);

    //panggil router untuk ngerout
    const router = useRouter();

    //buat fungsi input data
    function tambah() {
        if(inputane.ref=='' || inputane.caption==''){
            swal("Lengkapi isian dulu!");
            return;
        }
      axios
        .post("https://mark.databiz.my.id/adiapi/ytube", inputane)
        .then(() => {
          router.push({ name: "index" });
        })
        .catch((err) => {
          validasi.value = err.response.data;
        });
    }

    return{
        inputane,
        validasi,
        router,
        tambah
    }
  },
};
</script>

<style>
</style>