# AIOITS

Repository for mobile application

# TODO

1. Create dropdown menu

2. Create pembayaran clicked

3. Create datepicker

# How to run this project

1. Open terminal

   ```bash
   npm i
   ```

2. Run the expo

   run all

   ```bash
   npm run start
   ```

   only run in android

   ```bash
   npm run android
   ```

   only run in IOS

   ```bash
   npm run ios
   ```

3. Open new terminal and run

   ```bash
   npm run dev:tailwind
   ```

4. Go to PlayStore

   Install app **Expo** or in [this link](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share)

5. Scan QR Code in **Expo** or input the URL

# How to use Tailwind in this project

This project use tailwind-rn from [this link](https://github.com/vadimdemedes/tailwind-rn). Example:

```bash
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// add this import
import {useTailwind} from 'tailwind-rn';

const Hello = () => {
    // also add this import
	const tw = useTailwind();

	return (
		<SafeAreaView style={tw('h-full')}>
			<View style={tw('pt-12 items-center')}>
				<View style={tw('bg-blue-200 px-3 py-1 rounded-full')}>
					<Text style={tw('text-blue-800 font-semibold')}>
						Hello Tailwind
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Hello;
```

**Notes** : If during development, Tailwind CSS doesn't change or there are other issues related to CSS, perform a program rerun.
