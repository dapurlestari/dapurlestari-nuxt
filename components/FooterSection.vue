<template>
    <div>
        <footer class="footer footer-center p-10 bg-gray-100 text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <!-- <a class="link link-hover">About Us</a> 
                <a class="link link-hover">Contact</a> 
                <a class="link link-hover">Career</a>  -->
                <NuxtLink to="/privacy-policy" class="link link-hover">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms-services" class="link link-hover">Terms and Services</NuxtLink>
            </div> 
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a v-for="item in $socials" :key="item.id" :href="item.attributes.link" target="_blank" class="">
                        <i :class="item.attributes.icon+' text-lg hover:text-secondary-500'"></i>
                    </a>
                </div>
            </div> 
            <div>
                <p class="text-sm">{{ $myConfig.copyright }}</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
    const { $myConfig, $socials } = useNuxtApp()
    console.log($socials);
</script>