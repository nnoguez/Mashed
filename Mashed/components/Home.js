// Home.js
import React from "react";
import { View, ScrollView, Text, StyleSheet, SectionList } from 'react-native';
import { Avatar, Image, Badge, Card } from '@rneui/themed';

export default function Home({ navigation }) {
    return (
    <>
    <View style={styles.viewOne}>
        <Image
        style={{ 
            marginLeft: 80, 
            marginBottom: 10,
            marginTop: 5, 
            width:"50%", 
            height:25}}
        source={{
        uri:'https://i.postimg.cc/65XBkHNg/logo.png',
        }}
        /> 
        <ScrollView
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
                value="+" 
                status="warning" 
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

        {/* card posting 1*/}
        <Card borderRadius={25} margin>
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
                value=" jr.lisa03 " 
                status="success" 
                containerStyle={{ position: 'absolute',  left: 50 }}
            />
        <Card.Image
            style={{width:"100%",height:300}}
            source={{
            uri:'https://i.pinimg.com/originals/90/2c/91/902c916c90e7eab300f623db3384e614.jpg',
            }}
        />
        <Text style={{fontWeight: 'bold', marginTop: 10}}>
            lisaaa!
        </Text>
        <Text style={{ marginTop: 5 }}>
            making little margherita pizzas with 
            <Text style={{fontWeight: 'bold'}}> @allii.sun7 </Text>
            and 
            <Text style={{fontWeight: 'bold'}}> @kayyy_la </Text>
            we tried and failed at making them look 
            like hearts, but they were still soo good! 🫶🏽🍕
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <Text style={{ fontSize: 10, fontWeight: 'bold'}}>
            BEST Homemade Margherita Pizza - Laura Nettle
        </Text>
        </Card>


    {/* card posting 2*/}
    <Card borderRadius={25} margin>
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
                value=" 3dilan " 
                badgeStyle={{backgroundColor:'grey'}}
                containerStyle={{ position: 'absolute',  left: 50, color: 'grey' }}
            />
        <Card.Image
            style={{width:"100%",height:300}}
            source={{
            uri:'https://64.media.tumblr.com/3edf6724cd61788b621c7f2ebfef3b5d/2d4ed2bc1204eeaa-3a/s1280x1920/387e893ca9e70fffd9518dfa79fb404b9822bd06.jpg',
            }}
        />
        <Text style={{fontWeight: 'bold', marginTop: 10}}>
            Lani ^-^
        </Text>
        <Text style={{ marginTop: 5 }}>
            Went out to eat with my sister and they had the best Greek
            salad I've had in a while. Definitely my own once I travel back home. 😍
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <Text style={{ fontSize: 10, fontWeight: 'bold'}}>
            Modern Greek Salad - Uptown Eatery
        </Text>
        </Card>


        {/* card posting 3*/}
        <Card borderRadius={25} margin>
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
        <Card.Image
            style={{width:"100%",height:300}}
            source={{
            uri:'https://images.squarespace-cdn.com/content/v1/5984b6c159cc687d5abe522d/1519327286911-KWBHIN9P9D6AAVRELK7D/Unknown+%281%29.jpeg',
            }}
        />
        <Text style={{fontWeight: 'bold', marginTop: 10}}>
            Emanuel
        </Text>
        <Text style={{ marginTop: 5 }}>
            Made one too many desserts today, but that just
            means more food for my wife and I to enjoy! 🍽
        </Text>
        <Card.Divider style={{marginTop: 5}}/>
        <Text style={{ fontSize: 10, fontWeight: 'bold'}}>
            BEST Homemade Margherita Pizza - Laura Nettle
        </Text>
        </Card>
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
    avatarSpacing: {
        marginRight: 10,
    },
    followFor: {
        textAlign: "center",
    },
    followForColor: {
        color: "#FFC42D",
    }
})