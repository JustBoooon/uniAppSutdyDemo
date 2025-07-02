<template>
	<swiper class="banner">
		<swiper-item v-for="item in pics" :key="item.id">
			<image @tap="previewImage(item.url)" :src="item.url" mode=""></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				// 轮播图数据
				pics: [
					{ id: '1', url: "https://i.pinimg.com/736x/64/45/03/64450323b83b8ce2a21cf016ec648d2d.jpg"},
					{ id: '2', url: "https://i.pinimg.com/736x/d6/bf/c8/d6bfc893124cfcffcca80cbdd9422766.jpg"},
					{ id: '3', url: "https://i.pinimg.com/736x/0f/46/8b/0f468b53bce83d59a004aee94cc6364c.jpg"},
					{ id: '4', url: "https://i.pinimg.com/736x/10/35/90/1035905b519e92e925510ce23b7d2212.jpg"},
				]
			}
		},
		onLoad() {

		},
		methods: {
			previewImage(url) {
				uni.previewImage({
					urls: this.pics.map(item => item.url),
					current: url
				})
			}
		}
	}
</script>

<style>
	.banner, .banner image {
		width: 750rpx;
		height: 750rpx;
	}
</style>
