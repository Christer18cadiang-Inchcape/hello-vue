<template>
   <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-nav>
                <!-- <b-nav-item href="#">Link</b-nav-item> -->
                <DropdownCheck></DropdownCheck>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import DropdownCheck from '@/components/DropdownCheck.vue';


export default {
    name: "NavBar",
    props: {
        msg: String
    },
    components: { DropdownCheck }
}
</script>

<style>

</style>