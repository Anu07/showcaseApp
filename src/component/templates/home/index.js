import React from 'react';
import { SafeAreaView, View, FlatList, Image, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../assets/imagesPath';
import Header from '../../../util/header';
import styles from '../../../util/styles';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        url: 'https://i.etsystatic.com/13404419/r/il/db52e2/1770789697/il_794xN.1770789697_pbd2.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        url: 'https://i.etsystatic.com/14585603/c/2262/1798/0/0/il/964164/3058318415/il_340x270.3058318415_68xo.jpg'
    },
    {
        id: '58694a1f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        url: 'https://i.etsystatic.com/33839658/r/il/46ad8d/3819106297/il_340x270.3819106297_k5oh.jpg'
    },
    {
        id: 'bd7acbea-c1b2-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        url: 'https://i.etsystatic.com/13404419/r/il/db52e2/1770789697/il_794xN.1770789697_pbd2.jpg'
    },
    {
        id: '3ac68afc-c615-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        url: 'https://i.etsystatic.com/14585603/c/2262/1798/0/0/il/964164/3058318415/il_340x270.3058318415_68xo.jpg'
    },
    {
        id: '58694a0f-3da1-472f-bd96-145571e29d72',
        title: 'Third Item',
        url: 'https://i.etsystatic.com/33839658/r/il/46ad8d/3819106297/il_340x270.3819106297_k5oh.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c3-aed5-3ad53abb28ba',
        title: 'First Item',
        url: 'https://i.etsystatic.com/13404419/r/il/db52e2/1770789697/il_794xN.1770789697_pbd2.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f9-fbd91aa97f63',
        title: 'Second Item',
        url: 'https://i.etsystatic.com/14585603/c/2262/1798/0/0/il/964164/3058318415/il_340x270.3058318415_68xo.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd97-145571e29d72',
        title: 'Third Item',
        url: 'https://i.etsystatic.com/33839658/r/il/46ad8d/3819106297/il_340x270.3819106297_k5oh.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46d2-aed5-3ad53abb28ba',
        title: 'First Item',
        url: 'https://i.etsystatic.com/13404419/r/il/db52e2/1770789697/il_794xN.1770789697_pbd2.jpg'
    },
    {
        id: '3ac68afc-c605-49d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        url: 'https://i.etsystatic.com/14585603/c/2262/1798/0/0/il/964164/3058318415/il_340x270.3058318415_68xo.jpg'
    },
    {
        id: '58694a0f-3da1-472f-bd96-145571e29d72',
        title: 'Third Item',
        url: 'https://i.etsystatic.com/33839658/r/il/46ad8d/3819106297/il_340x270.3819106297_k5oh.jpg'
    },
    {
        id: '3ac68afc-c615-49d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        url: 'https://i.etsystatic.com/14585603/c/2262/1798/0/0/il/964164/3058318415/il_340x270.3058318415_68xo.jpg'
    },
    {
        id: '58694a0f-3da2-472f-bd96-145571e29d72',
        title: 'Third Item',
        url: 'https://i.etsystatic.com/33839658/r/il/46ad8d/3819106297/il_340x270.3819106297_k5oh.jpg'
    },
];

export default class HomeScreen extends React.Component {
    render() {
        const GridItem = ({ data }) => (
            <TouchableOpacity style={[styles.card, { borderColor: "#ffffff", borderRadius: 5 }]}>
                <Image
                    style={styles.gridLogo}
                    source={{
                        uri: data.url,
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.logoText, { color: '#000000', padding: 5 }]} numberOfLines={1} ellipsizeMode="tail">Best Coffee Shops near...</Text>
                    <Text style={{ color: '#000000', paddingLeft: 5 }}>200 Views 2 days ago</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text>4 Views 0 Comments</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Solve This</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );

        return (
            <SafeAreaView style={styles.container}>
                <Header title={"Videos"} />
                <FlatList style={{
                    padding: 5,
                    marginTop: 20,
                    height: '90%'
                }}
                    data={DATA}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                    renderItem={({ item }) => <GridItem data={item} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    scrollEnabled={true}
                    key={item => item.id}
                    ListFooterComponent={<View style={{ height: 20 }} />}
                />
                {/* <MyTabs/> */}
            </SafeAreaView>
        );
    }
}
// export default HomeScreen;