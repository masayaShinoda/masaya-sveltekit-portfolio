<script lang="ts">
	import styles from './ContentSection1.module.css';
</script>

<section class={styles.content_section_1_container}>
	<div class={styles.content}>
		<div class={styles.section__left}>
			<h2>My Design Philosphy</h2>
			<p>
				In this busy world, we tend to overlook how important it is to keep things simple. My
				approach in creating websites and infographics is to deliver essential information in an
				easy-to-digest manner.
			</p>
			<p>
				I make a conscious effort to create website navigations that are intuitive and accessible.
				Accessibility is a <span class={styles.font__bold}>necessity</span>, not an afterthought.
			</p>
		</div>
		<div class={styles.section__right}>
			<img src="/images/golden-ratio.svg" alt="Golden Ratio" width="480" height="297" />
		</div>
	</div>
</section>
