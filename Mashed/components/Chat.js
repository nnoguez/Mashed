// home screen (naomy)


import React from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { Avatar, Image, Badge, Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Chat({ navigation }) {
    return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        <View>
                <View style={[styles.container,{flexDirection: 'row'}]}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                        <Icon style={{ marginRight: 355, marginTop: 20 }} name="angle-left" size={35} color="#FFC42D" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Message')}>
                        <Icon style={{ marginRight: 355, marginTop: 20 }} name="pencil" size={25} color="#FFC42D" />
                    </TouchableOpacity>
                </View>
            <Image
            style={{ 
                marginLeft: 127, 
                marginBottom: 30,
                width:"35%", 
                height:25}}
            source={{
            uri:'https://i.postimg.cc/65XBkHNg/logo.png',
            }}
            /> 
        </View>
        
    <ScrollView>
    {/* row 1 */}
        <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://i.pinimg.com/originals/39/15/61/391561b89ca54138d1bd989765305c0f.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> jrlisa03 </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 60, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 180, color: 'lightgrey'}}> 12 min </Text>
                </View>
                <Text> no! they actually came out so well but my ... </Text>
            </View>
        </View>

    {/* row 2 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> daanteok </Text>
                    <Badge
                        value= "" 
                        badgeStyle={{backgroundColor:'lightgrey'}}
                        containerStyle={{ position: 'absolute', left: 72, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 177, color: 'lightgrey'}}> 2 hrs </Text>
                </View>
                <Text> I wanted to add more spice to it but I wasn... </Text>
            </View>
        </View>

    {/* row 3 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://t4.ftcdn.net/jpg/02/77/68/51/360_F_277685185_UAYxm224UPelni1rxsuAUZQbfhly0RpL.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> collieen_. </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 74, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 175, color: 'lightgrey'}}> 4 hrs </Text>
                </View>
                <Text> It should be up on my page now if you wan... </Text>
            </View>
        </View>

    {/* row 4 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> abigail.adxms </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 104, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 115, color: 'lightgrey'}}> Yesterday </Text>
                </View>
                <Text> I've never tried that out! I'm planning on b... </Text>
            </View>
        </View>
        
        {/* row 5 */}
        <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/03/burpingBaby-1208596849_770x533.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> jam.team007 </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 99, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 141, color: 'lightgrey'}}> 3 days </Text>
                </View>
                <Text> Sure. No problem. Let me know if you nee... </Text>
            </View>
        </View>

    {/* row 6 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBtYW58ZW58MHx8MHx8&w=1000&q=80" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> zoliani3 </Text>
                    <Badge
                        value= "" 
                        badgeStyle={{backgroundColor:'lightgrey'}}
                        containerStyle={{ position: 'absolute', left: 62, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 179, color: 'lightgrey'}}> 3 days </Text>
                </View>
                <Text> Definitely going to add my own twist to thi... </Text>
            </View>
        </View>
        
    {/* row 7 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://media.istockphoto.com/id/1338884808/photo/shot-of-an-adorable-little-boy-spending-quality-time-with-his-father-on-the-sofa-at-home.jpg?b=1&s=170667a&w=0&k=20&c=DmQ8Knlq3Jk3x5rjj47FAgRTlCgDrknyucfuclxm9Bw=" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> ben_n_jeremy </Text>
                    <Badge
                        value= "" 
                        badgeStyle={{backgroundColor:'lightgrey'}}
                        containerStyle={{ position: 'absolute', left: 107, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 132, color: 'lightgrey'}}> 4 days </Text>
                </View>
                <Text> Do you think I could cut this recipe in half ... </Text>
            </View>
        </View>

    {/* row 8 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://www.thebritishacademy.ac.uk/media/images/10-Minute-Talk-nature-of-friendshi.2e16d0ba.fill-768x432.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> kolaid81_ </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 74, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 154, color: 'lightgrey'}}> 01/17/23 </Text>
                </View>
                <Text> Did you see that I won today's challenge? ... </Text>
            </View>
        </View>

    {/* row 9 */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/05/web3-woman-smile-portrait-redhead-red-hair-shutterstock.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> chefmark </Text>
                    <Badge
                        value= "" 
                        badgeStyle={{backgroundColor:'lightgrey'}}
                        containerStyle={{ position: 'absolute', left: 73, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 151, color: 'lightgrey'}}> 01/08/23 </Text>
                </View>
                <Text> Thanks for the follow. Check my highlight... </Text>
            </View>
        </View>

    {/* row 11 */}
    <View style={[styles.container,{flexDirection: 'row'}, {marginBottom: 130}]}>
    <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        avatarStyle={{ 
                        borderWidth: 4, 
                        borderColor: '#9492EF', 
                        borderRadius: 100, 
                        }}        
                        size={80}
                        rounded
                        source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/elise-and-chuck-1600099935.jpg" }}
                    />
                </View>    
            </View>
            <View style={{flex: 3, justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row'}]}>
                    <Text style={{fontWeight: 'bold'}}> atlbakes. </Text>
                    <Badge
                        value= "" 
                        status= "success"
                        containerStyle={{ position: 'absolute', left: 70, bottom: 4 }}
                    />
                    <Text style={{marginLeft: 157, color: 'lightgrey'}}> 01/01/23 </Text>
                </View>
                <Text> We've been wanting to open up shop. Mas... </Text>
            </View>
        </View>
    </ScrollView> 
</View>
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
        marginTop: 15,
    },
    followFor: {
        textAlign: "center",
    },
    followForColor: {
        color: "#FFC42D",
        fontWeight: 'bold'
    }
})