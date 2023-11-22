<template>
    <div>
        <NavbarTw />
        <!-- we have to add slot on layouts -->
        <main class="container mx-auto px-4 mt-24">
                <slot />
        </main>
    </div>
</template>