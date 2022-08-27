import { Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import images from '../../../assets/imagesPath';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = ({ navigation }) => (
    <Onboarding
        onDone={() => {
            console.log('done')
            navigation.navigate("Drawer");
        }
        }
        onSkip={()=>{
            console.log('done')
            navigation.navigate("Drawer");
        }

        }
        pages={
            [
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.onboarding1} style={{
                        height: 400, resizeMode: 'contain',
                    }} />,
                    bottomBarColor: '#fff',
                    title: 'Get Started!',
                    subtitle: 'Check out district videos from our YouTube channel directly in the app.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.onboarding2} style={{
                        height: 400, resizeMode: 'contain',
                    }} />,
                    title: 'Get Started!',
                    bottomBarColor: '#fff',
                    subtitle: 'Record videos directly from within the app.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.onboarding3} style={{
                        height: 400, resizeMode: 'contain',
                    }} />,
                    title: 'Get Started!',
                    bottomBarColor: '#fff',
                    subtitle: "Upload videos already stored in your video library.",
                },
            ]}
    />
);

export default OnboardingScreen;