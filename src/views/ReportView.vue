<template>
  <div class="container admin">
    <h1 class="mb-2 text-start">/Report</h1>

    <h1 class="mb-2 text-start">/Admin</h1>
    <AdminOrders />
    <AdminStock />
    <AdminUsers />
  </div>
</template>

<script>
import AdminStock from '@/components/AdminStock.vue';
import AdminUsers from '@/components/AdminUsers.vue';
import AdminOrders from '@/components/AdminOrders.vue';

export default {
  components: {
    AdminUsers,
    AdminStock,
    AdminOrders
  }
};
</script>

<style scoped>
.admin {
  line-height: 1.5;
  font-size: 17px;
  letter-spacing: 0.05em;
  margin-top: 120px;
}
</style>