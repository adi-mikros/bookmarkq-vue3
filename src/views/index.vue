<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <router-link
          :to="{ name: 'tambah' }"
          class="btn btn-primary btn-sm shadow rounded mb-4">
          Tambahkan
        </router-link>

        <div class="row">
          <div class="col-3 objek-ytube" v-for="(trx, index) in transx" :key="index">
            <div class="card shadow rounded" >
              <img :src="'https://i.ytimg.com/vi/'+trx.ref+'/hqdefault.jpg'" class="card-img-top" :alt="trx.caption">
              <div class="card-body">
                <h5 class="card-title">{{trx.caption}}</h5>
                              <div class="btn-group">
                                              <a :href="'https://www.youtube.com/watch?v='+trx.ref" 
                        target="_blank"
                        class="btn btn-success btn-sm">Tonton</a>
                      <router-link
                        :to="{ name: 'materi', params: { idx: trx.id } }" 
                        class="btn btn-outline-primary btn-sm">Edit</router-link>
                      <button 
                        @click.prevent="hapus(trx.id,index)"                      
                       class="btn btn-sm btn-danger">Hapus</button>
                    </div>
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let transx = ref([]);
    onMounted(() => {
      //ambil data awal
      axios
        .get("https://mark.databiz.my.id/adiapi/ytube")
        .then((result) => {
          transx.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function hapus(id, index) {
      swal({
        title: "Anda Yakin?",
        text: "Yakin akan menghapus video ini?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`https://mark.databiz.my.id/adiapi/ytube/${id}`)
            .then((result) => {
              transx.value.splice(index, 1);
              swal("Dihapus!", "video bookmark telah dihapus!", "success");
            })
            .catch((err) => {
              console.log(err.response);
            });
        }
      });
    }

    return {
      transx,
      hapus,
    };
  },
};
</script>

<style>
</style>