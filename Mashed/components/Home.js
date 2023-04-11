// home screen (naomy)


import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { Avatar, Image, Badge, Card, CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Home({ navigation }) {
    const toggleCheckbox = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
      };
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/HomePage.php')
          .then(response => response.json())
          .then(data => setPosts(data))
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
                        <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold' }}
                            onPress={() => navigation.navigate('Recipe')}>
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
    {/* card posting 1*/}
        {/* <Card borderRadius={25} margin>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={50}
                rounded
                source={{ uri: "https://media.istockphoto.com/id/1150742429/photo/asian-girl-taking-a-selfie-in-rain.jpg?s=612x612&w=0&k=20&c=SQITcq6XT-JTScQLFkTtvvj6yOpP04EPRUOq5Y-3-Hg=" }}
            />
            <Badge
                value=" alice_sun " 
                status="success" 
                containerStyle={{ position: 'absolute',  left: 50 }}
            />
            <Text style={{ marginLeft: 250, marginTop: 19, fontWeight: 'bold'}}> 2.5k </Text>
            <TouchableOpacity
                style={{ 
                    justifyContent: 'center',
                    marginLeft: -15
            }}>
                <CheckBox
                    checked={checked}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="#EE7E74"
                    onPress={toggleCheckbox}
                />
          </TouchableOpacity> */}
            {/* <Icon style={{ marginTop: 15, marginRight: 5 }} name="heart" size={20} color="#EE7E74" /> */}
        {/* </View>
        <Card.Image
            style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://tiffycooks.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-26-at-12.35.22-AM.png',
            }}
        /> */}
    {/* post bio */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <Text style={{fontWeight: 'bold', marginTop: 3, marginRight: 124}}> sunny ☼ </Text>
            <Icon style={{ marginLeft: 10 }} name="comment" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 483 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="bookmark" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 238 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="share" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 104 </Text>
        </View>

        <Text style={{ marginTop: 5 }}>
            have been wanting to replicate this recipe for the longest time 
            and i'm happy to announce that it's finally here and so good! 🥰
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <View style={{ flexDirection: 'row'}}>
            <Icon name="book" size={15} color="#FFC42D" />
            <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold'}} 
                onPress={()=> navigation.navigate('Recipe')}>
                Crispy Chicken Katsu - Alice Zhang
            </Text>
            <View style={{ justifyContent: 'flex-end', marginLeft: 77 }}>
                <Text style={{fontSize: 10, color: "lightgrey"}}>
                    3:24 PM   01/31/23
                </Text>
            </View>
        </View>
        </Card> */}


        {/* card posting 2*/}
        {/* <Card borderRadius={25} margin>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={50}
                rounded
                source={{ uri: "https://i.pinimg.com/originals/39/15/61/391561b89ca54138d1bd989765305c0f.jpg" }}
            />
            <Badge
                value=" jrlisa03 " 
                status="success" 
                containerStyle={{ position: 'absolute',  left: 50 }}
            />
            <Text style={{ marginLeft: 250, marginTop: 17, fontWeight: 'bold'}}> 1.3k </Text>
            <TouchableOpacity
                style={{ 
                    justifyContent: 'center',
                    marginLeft: -15
            }}>
                <CheckBox
                    checked={checked2}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="#EE7E74"
                    onPress={toggleCheckbox2}
                />
            </TouchableOpacity> */}
            {/* <Icon style={{ marginTop: 15, marginRight: 5 }} name="heart" size={20} color="#EE7E74" /> */}
        {/* </View>
        <Card.Image
            style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://i.pinimg.com/originals/90/2c/91/902c916c90e7eab300f623db3384e614.jpg',
            }}
        /> */}
    {/* post bio */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <Text style={{fontWeight: 'bold', marginTop: 3, marginRight: 134}}> lisaaa! </Text>
            <Icon style={{ marginLeft: 10 }} name="comment" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 299 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="bookmark" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 182 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="share" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 293 </Text>
        </View>

        <Text style={{ marginTop: 5 }}>
            making little margherita pizzas with 
            <Text style={{fontWeight: 'bold'}}> @allii.sun7 </Text>
            and 
            <Text style={{fontWeight: 'bold'}}> @kayyy_la </Text>
            we tried and failed at making them look 
            like hearts, but they were still soo good! 🫶🏽🍕
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <View style={{ flexDirection: 'row'}}>
            <Icon name="book" size={15} color="#FFC42D" />
            <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold'}}>
            BEST Homemade Margherita Pizza - Laura Nettle
            </Text>
            <View style={{ justifyContent: 'flex-end', marginLeft: 6 }}>
                <Text style={{fontSize: 10, color: "lightgrey"}}>
                    2:35 PM   01/31/23
                </Text>
            </View>
        </View>
        </Card> */}


    {/* card posting 3*/}
    {/* <Card borderRadius={25} margin>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={50}
                rounded
                source={{ uri: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwc21pbGV8ZW58MHx8MHx8&w=1000&q=80" }}
            />
            <Badge
                value=" 3d.ilan " 
                badgeStyle={{backgroundColor:'#ACACAC'}}
                containerStyle={{ position: 'absolute',  left: 50 }}
            />
            <Text style={{ marginLeft: 250, marginTop: 17, fontWeight: 'bold'}}> 2.4k </Text>
            <TouchableOpacity
                style={{ 
                    justifyContent: 'center',
                    marginLeft: -15
            }}>
                <CheckBox
                    checked={checked3}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="#EE7E74"
                    onPress={toggleCheckbox3}
                />
          </TouchableOpacity> */}
            {/* <Icon style={{ marginTop: 15, marginRight: 5 }} name="heart" size={20} color="#EE7E74" /> */}
        {/* </View>
        <Card.Image
            style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://64.media.tumblr.com/3edf6724cd61788b621c7f2ebfef3b5d/2d4ed2bc1204eeaa-3a/s1280x1920/387e893ca9e70fffd9518dfa79fb404b9822bd06.jpg',
            }}
        /> */}

        {/* post bio */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <Text style={{fontWeight: 'bold', marginTop: 3, marginRight: 120}}> Lani ^-^ </Text>
            <Icon style={{ marginLeft: 10 }} name="comment" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 299 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="bookmark" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 182 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="share" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 293 </Text>
        </View>

        <Text style={{ marginTop: 5 }}>
            Went out to eat with my sister and they had the best Greek
            salad I've had in a while. Definitely my own once I travel back home. 😍
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <View style={{ flexDirection: 'row'}}>
            <Icon name="book" size={15} color="#FFC42D" />
            <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold'}}>
                Modern Greek Salad - Uptown Eatery
            </Text>
            <View style={{ justifyContent: 'flex-end', marginLeft: 66 }}>
                <Text style={{fontSize: 10, color: "lightgrey"}}>
                    4:15 PM   01/30/23
                </Text>
            </View>
        </View>
        </Card> */}


        {/* card posting 4*/}
        {/* <Card borderRadius={25} margin>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Avatar
                avatarStyle={{ 
                borderWidth: 4, 
                borderColor: '#9492EF', 
                borderRadius: 100, 
                }}        
                size={50}
                rounded
                source={{ uri: "https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" }}
            />
            <Badge
                value=" mannillobake " 
                status="success" 
                containerStyle={{ position: 'absolute',  left: 50 }}
            />
            <Text style={{ marginLeft: 250, marginTop: 17, fontWeight: 'bold'}}> 3.1k </Text>
            <TouchableOpacity
                style={{ 
                    justifyContent: 'center',
                    marginLeft: -15
            }}>
                <CheckBox
                    checked={checked4}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="#EE7E74"
                    onPress={toggleCheckbox4}
                />
          </TouchableOpacity> */}
            {/* <Icon style={{ marginTop: 15, marginRight: 5 }} name="heart" size={20} color="#EE7E74" /> */}
        {/* </View>
        <Card.Image
            style={{width:"100%", height:300, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://images.squarespace-cdn.com/content/v1/5984b6c159cc687d5abe522d/1519327286911-KWBHIN9P9D6AAVRELK7D/Unknown+%281%29.jpeg',
            }}
        /> */}
        {/* post bio */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <Text style={{fontWeight: 'bold', marginTop: 3, marginRight: 120}}> Emanuel </Text>
            <Icon style={{ marginLeft: 10 }} name="comment" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 732 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="bookmark" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 821 </Text>
            <Icon style={{ marginLeft: 10, marginTop: 2 }} name="share" size={20} color="#9492EF" />
            <Text style={{ marginTop: 5 }}> 405 </Text>
        </View>

        <Text style={{ marginTop: 5 }}>
            Made one too many desserts today, but that just
            means more food for my wife and I to enjoy! 🍽
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <View style={{ flexDirection: 'row'}}>
            <Icon name="book" size={15} color="#FFC42D" />
            <Text style={{ marginLeft: 5, marginTop: 2, fontSize: 10, fontWeight: 'bold'}}>
                Yummy Berry Pastries - Emanuel Milano
            </Text>
            <View style={{ justifyContent: 'flex-end', marginLeft: 47 }}>
                <Text style={{fontSize: 10, color: "lightgrey"}}>
                    10:01 PM   01/29/23
                </Text>
            </View>
        </View>
        </Card>
    </ScrollView> */}
 

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