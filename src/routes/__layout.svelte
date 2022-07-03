<!-- /src/routes/__layout.svelte -->

<style>
    header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding-left: 16px;
        padding-right: 16px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin: 5px;
        font-weight: 400;
        font-size: 25px;
    }
</style>

<header>
    <h1>My Blog</h1>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>

<!-- Slot means child components
    Before a component can accept children, though, it needs to know where to put them.
-->
<slot></slot>