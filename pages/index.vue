<template lang="pug">
  Default(:showNavbar="true")
    h1 {{ title }}
    .subtitle {{ subtitle }}

    div Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam autem saepe placeat possimus eius commodi temporibus est tempora sapiente earum quasi suscipit sequi eos sint ipsum incidunt, aut quisquam, nihil ad! Hic in quos laboriosam rem, distinctio harum magnam laudantium aliquid, placeat quisquam culpa ratione. Itaque, labore a maiores ullam cupiditate eaque iusto natus ex! Blanditiis dolor dolorum quidem, dolorem pariatur itaque ut illo est neque ipsam vitae perferendis laudantium cum eius. Quasi dignissimos fugit repellendus non recusandae tempore laudantium ipsam quia doloribus, ducimus magnam veritatis voluptatem nemo labore ea obcaecati praesentium enim suscipit cum beatae vero adipisci cupiditate asperiores! Debitis expedita id, voluptatibus asperiores sint porro culpa nulla impedit eius ea. Exercitationem, possimus. Consequatur et modi reiciendis. Nesciunt itaque nulla tempore sit sunt quos deserunt doloribus magnam ratione optio? Aliquam pariatur tempora temporibus? Totam blanditiis cum laboriosam atque, porro aspernatur assumenda, officiis eaque dicta quo impedit beatae ipsum debitis? Iusto fuga alias aliquam accusantium velit ratione delectus perferendis iste similique nesciunt eligendi asperiores, soluta tenetur tempore temporibus quibusdam, corporis ipsa at molestiae! Eos excepturi quas neque velit possimus, dolores inventore nobis similique porro nemo hic amet cum distinctio fugiat beatae labore facere dolorem ex laudantium nisi laboriosam cumque! Ratione perferendis deserunt voluptatibus cumque maxime? Accusantium delectus suscipit officiis tenetur dolorum atque, asperiores praesentium laborum voluptates ipsa id consequuntur similique nulla sed illo excepturi cupiditate dignissimos doloremque molestiae autem. Eaque, itaque quasi dicta iusto similique quibusdam, perferendis dolor, debitis temporibus mollitia maiores harum magni rem. Vitae dolor odit quibusdam esse aliquam assumenda molestias ipsum, aut at facilis fuga accusantium dolores quam mollitia. Magni delectus voluptates corrupti obcaecati eum magnam quod quo ullam beatae eius ex consectetur ad dicta eaque perspiciatis sunt, dolore natus labore, nostrum velit similique? Molestias, distinctio cupiditate. Laboriosam blanditiis ducimus distinctio aut incidunt corporis tenetur sequi ipsa! Quis aliquid et dolor vero sapiente ut minus sunt officia libero reprehenderit quisquam possimus natus, ducimus doloribus placeat sint illum voluptatum ab totam nam magni accusamus nulla! Ea odio excepturi eum molestiae aliquam unde cupiditate sint eaque delectus praesentium magnam totam, ex architecto, aliquid ipsam quia voluptatum, inventore aperiam molestias harum beatae ipsa quisquam? Incidunt suscipit, enim ratione mollitia eius officiis nostrum placeat, consequuntur alias ipsam consequatur. Nihil quasi asperiores aut consequuntur dignissimos porro repudiandae amet non, odit corporis laudantium eius distinctio quaerat, unde aperiam doloribus sint cupiditate, expedita excepturi similique beatae! Tempore repellat quibusdam quam asperiores obcaecati nisi a, eum delectus exercitationem velit dolores doloribus ipsum optio aut earum vel ducimus dolorum corporis error doloremque laudantium nulla iusto ea. Praesentium omnis eligendi corrupti? Ipsum cumque ab dolore tempore alias vitae in voluptas accusantium repellat eaque eveniet tempora obcaecati, ducimus beatae, voluptatum saepe iure eius dignissimos non facilis consequatur delectus fugit deserunt consectetur. Nam repellendus, quidem nostrum nulla aut possimus accusantium consectetur dolores officiis sit. Quae, aperiam ut. Tenetur, autem! Expedita, praesentium? Exercitationem dolore ad sit fugiat sed porro dicta inventore eum provident rerum vitae voluptatem quos corporis quas hic incidunt officia, nesciunt voluptatum deserunt delectus temporibus, ducimus odio.
</template>

<script>

import Default from '~/layouts/Default.vue';


export default {
  components: {
    Default,
  },
  async asyncData({params, app}){
    var md = require('markdown-it')();
    var markdownContent = await import('@/content/landing.md');
    var attributes = markdownContent.attributes;

    return {
      title: attributes.title,
      subtitle: attributes.subtitle,
    }
  }
}
</script>