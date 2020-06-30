<template>
  <div>
    <div>
      <article>
        <h1>{{ doc.title }}</h1>

        <NuxtContent :document="doc" />
      </article>

      <EditOnGithub :document="doc" />
      <NuxtLogo />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSlug",
  middleware({ params, redirect }) {
    if (params.slug === "index") {
      redirect("/");
    }
  },
  async asyncData({ $content, store, app, params, error }) {
    const slug = params.slug || "index";

    let doc;
    try {
      doc = await $content(slug).fetch();
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    return { doc };
  },
};
</script>
