// home screen (naomy)


import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { Avatar, Image, Badge, Card, CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Home({ navigation }) {
    const [checkedStates, setCheckedStates] = useState([]); // Initialize with empty array
    const toggleCheckbox = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
    };
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/HomePage.php')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setCheckedStates(data.map(() => false)); // Update checkedStates with data length
            })
            .catch(error => console.error(error))
    }, []);
    return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        
    
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                <Icon style={{ marginLeft: 355, marginTop: 20 }} name="commenting" size={25} color="#FFC42D"/>
            </TouchableOpacity>
            <Image
            style={{ 
                marginLeft: 127, 
                marginBottom: 10,
                width:"35%", 
                height:25}}
            source={{
            uri:'https://i.postimg.cc/65XBkHNg/logo.png',
            }}
            /> 
        
        </View>
        
    <ScrollView
        // horizontal functionality
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
            />
            <Badge
                value= "+" 
                badgeStyle={{backgroundColor:'#FFC42D'}}
                containerStyle={{ position: 'absolute', bottom: 5, left: 50 }}
            />
        </View>
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" }}
            />
        </View>
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://i.pinimg.com/originals/39/15/61/391561b89ca54138d1bd989765305c0f.jpg" }}
            />
        </View>    
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwc21pbGV8ZW58MHx8MHx8&w=1000&q=80" }}
            />
        </View>
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://img.huffingtonpost.com/asset/5cd5209f1f00002f009c4f81.jpeg?ops=scalefit_720_noupscale" }}
            />
        </View>     
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://media.theeverygirl.com/wp-content/uploads/2018/04/6-ways-to-approach-someone-you-want-to-be-friends-with-the-everygirl-6.jpg" }}
            />
        </View>
        <View style={styles.avatarSpacing}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={70}
                rounded
                source={{ uri: "https://www.cdc.gov/tobacco/health-equity/african-american/images/header-african-american-health-equity-500x500-1.jpg?_=71668" }}
            />
        </View>        
        </ScrollView>
    </View>

    {/* following/for you */}
    <ScrollView>
        <View>
            <Text style={styles.followFor}> 
            <Text style={styles.followForColor}> Following | </Text>
            For You</Text>
        </View>
        <View>
            {posts.map((post, index)=> (
                <Card borderRadius={25} margin key={post.postid}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Avatar
                        avatarStyle={{
                        borderWidth: 4,
                        borderColor: '#9492EF',
                        borderRadius: 100,
                        }}
                        size={50}
                        rounded
                        source={{ uri: post.AvatarImage }}
                    />
                    <Badge
                        value={post.Poster}
                        status="success"
                        containerStyle={{ position: 'absolute', left: 50 }}
                    />
                    <Text style={{ marginLeft: 250, marginTop: 19, fontWeight: 'bold' }}> {post.Likes} </Text>
                    <TouchableOpacity
                        style={{
                        justifyContent: 'center',
                        marginLeft: -15
                        }}>
                    <CheckBox
                    checked={checkedStates[index]} // use corresponding checked state from array
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="#EE7E74"
                    onPress={() => toggleCheckbox(index)} // pass index to toggle function
                    />
                    </TouchableOpacity>
                    </View>
                    <Card.Image
                    style={{ width: "100%", height: 300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
                    source={{
                        uri: post.PostImage,
                    }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 3, marginRight: 124 }}> {post.postname} </Text>
                    <Icon style={{ marginLeft: 10 }} name="comment" size={20} color="#9492EF" />
                    <Text style={{ marginTop: 5 }}> {post.Comments} </Text>
                    <Icon style={{ marginLeft: 10, marginTop: 2 }} name="bookmark" size={20} color="#9492EF" />
                    <Text style={{ marginTop: 5 }}> {post.Bookmarks} </Text>
                    <Icon style={{ marginLeft: 10, marginTop: 2 }} name="share" size={20} color="#9492EF" />
                    <Text style={{ marginTop: 5 }}> {post.Shares} </Text>
                    </View>
                    <Text style={{ marginTop: 5 }}>
                    {post.PostBio}
                    </Text>
                    <Card.Divider style={{ marginTop: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="book" size={15} color="#FFC42D" />
                        <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold' }}>
                            {post.PostName}
                        </Text>
                        <View style={{ justifyContent: 'flex-end', marginLeft: 77 }}>
                            <Text style={{ fontSize: 10, color: "lightgrey" }}>
                            {post.PostTime}
                            </Text>
                        </View>
                    </View>
            </Card>
            ))}
        </View>
    </ScrollView>
        </>
            );
        };

const styles = StyleSheet.create({
    viewOne: {
        textAlign: "center",
        margin: 20,
        marginBottom: 10
    },
    header: {
        marginRight: 10,
    },
    avatarSpacing: {
        marginRight: 10,
    },
    followFor: {
        textAlign: "center",
    },
    followForColor: {
        color: "#FFC42D",
        fontWeight: 'bold'
    }
})