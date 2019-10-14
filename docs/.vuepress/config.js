module.exports = {
	base: '/frameDoc/',
	title: 'Doucement',
	description: 'A Doucement Demo',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'guide', link: '/guide/' },
			{ text: 'GitHub', link: 'https://github.com/ljkikyo/frameDoc'},
			{
				text: 'Languages',
				items: [
				  { text: 'Chinese', link: '/language/chinese' },
				  { text: 'Japanese', link: '/language/japanese' }
				]
			}
		],
		sidebar: {			
      '/guide/': [
				{
					title: 'Group 1',
					collapsable: false,
					children: [
						'',        /* / */
						'contact',
						'about'
					]
				},
        {
					title: 'Group 2',
					children: []
				},
			],
		},
		// displayAllHeaders: true,
	}
}