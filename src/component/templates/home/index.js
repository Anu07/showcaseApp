import React from 'react';
import { SafeAreaView, View, FlatList, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../../util/header';
import styles from '../../../util/styles';
import { formatDate } from '../../../util/CommonUtils';
import { SearchBar } from 'react-native-elements';

const channelapiKey = "AIzaSyBL9MYxrGoLPBgrsC6nQCtNJokFmno-6HY";
const channelId = "UCH6GQETBTT26aQNGSr3EXjw";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            showSearchBar: true,
            search: "",
            filteredDataSource: []
        };
    }


    componentDidMount() {
        this.setState({});
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCE_rjrrLhCFqkg6rxyiRR3-2kBu8X8Peg&channelId=UCH6GQETBTT26aQNGSr3EXjw&part=snippet,id&order=date&maxResults=10', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then((responseJson) => {
                // setLoading(false);
                this.setState({ dataSource: responseJson.items })
                this.setState({filteredDataSource: responseJson.items})
                console.log("DATA PARSED 11",JSON.stringify(this.state.dataSource));
            })
            .catch(error => {
                console.log(error)
                // setLoading(false);
            })
    }


    render() {
        const GridItem = ({ data }) => (
            <TouchableOpacity style={[styles.card, { borderColor: "#ffffff", borderRadius: 5 }]} onPress={() => {
                console.log("Player Cicked");
                this.props.navigation.navigate("Player", {
                    videoId: data.id.videoId,
                    title: data.snippet.title,
                }
                )
            }}>
                <Image
                    style={styles.gridLogo}
                    source={{
                        uri: data.snippet.thumbnails.high.url,
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.logoText, { color: '#000000', padding: 5 }]} numberOfLines={1} ellipsizeMode="tail">{data.snippet.title}</Text>
                    <Text style={{ width: 150, color: '#000000', textAlign: 'left', paddingLeft: 5, marginBottom: 10 }} numberOfLines={1} ellipsizeMode="tail">{data.snippet.description}</Text>
                    <Text style={{ color: '#A9A9A9', textAlign: 'right', paddingRight: 5 }}>{formatDate(data.snippet.publishTime)}</Text>
                </View>

            </TouchableOpacity>
        );


        const searchFilterFunction = (text) => {
            console.log("Value of sources", JSON.stringify(this.state.dataSource))
            if (text) {
                const newData = this.state.dataSource.filter(function (item) {
                    const itemData = item.snippet.title
                        ? item.snippet.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                this.setState({ filteredDataSource: newData })
                this.setState({search:text})
            } else {
                this.setState({ filteredDataSource: this.state.dataSource })
                this.setState({search:text})
            }
        };

        const handleShow = (e) => {
            console.log("Clicked ticking", e);
            this.setState.showSearchBar = e;
            console.log("Clicked showSearchBar", this.setState.showSearchBar);
            if (e) {
                console.log("Showcase", e);
            } else {
                console.log("Showcase", e);
            }

            this.setState({ showSearchBar: e }, () =>
                console.log("callback", this.state.showSearchBar));
            this.forceUpdate();
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 60,marginTop:10 }}>
                    <Header title={"Videos"} parentCallback={handleShow} />
                </View>
                {console.log("showcase render", this.state.showSearchBar)}
                <SearchBar
                    style={{
                        color: '#000', backgroundColor: '#ffffff',padding:10
                    }}
                    lightTheme={true}
                    platform={Platform.OS}
                    searchIcon={{ size: 24, color: '#929292' }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Type Here..."
                    value={this.state.search}
                    containerStyle={{
                        marginTop: 20,
                        backgroundColor:"#fff",
                        borderBottomColor: 'white',
                        borderTopColor: 'white'
                    }}
                    inputContainerStyle={{ backgroundColor: '#fff' }}
                    inputStyle={{ backgroundColor: '#fff', borderColor:'#ededed',borderWidth:2, borderRadius:10,color:'#000',
                    paddingTop:10 }}
                />

                <FlatList style={{
                    padding: 5,
                    height: '90%'
                }}
                    data={this.state.filteredDataSource}
                    {...console.log("", this.state.dataSource)}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                    renderItem={({ item }) => <GridItem data={item} />}
                    keyExtractor={item => item.etag}
                    numColumns={2}
                    scrollEnabled={true}
                    key={item => item.channelTitle}
                    ListFooterComponent={<View style={{ height: 20 }} />}
                />
                {/* <MyTabs/> */}
            </SafeAreaView>
        );
    }
}
// export default HomeScreen;