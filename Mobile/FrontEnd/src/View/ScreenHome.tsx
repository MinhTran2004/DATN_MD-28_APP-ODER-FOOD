import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../CSS/CSSHome';
import ComponentHome from '../Component/Component_Home';
import { useCallback, useEffect, useState } from 'react';
import ServiceCategory from '../service/Service_Category';
import { Category } from '../Model/Model_Category';
import { Product } from '../Model/Model_Product';
import ServiceProduct from '../service/Service_Product';

export default function ScreenHome({ navigation }: any) {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoadingProduct, setIsLoadingProducts] = useState(false);
    const [page, setPage] = useState(0);
    const [isAtTheEnd, setIsAtTheEnd] = useState(false);

    const fetchProduct = async () => {
        return await ServiceProduct.getSome({ page });
    };

    // Fetch data
    const loadMoreProduct = async () => {
        if (isLoadingProduct) { return; }
        if (isAtTheEnd) { return; }

        setIsLoadingProducts(true);
        const newProducts = await fetchProduct();
        if (newProducts.length === 0) {
            setIsAtTheEnd(true);
        }
        setProducts(prevProducts => [...prevProducts, ...newProducts]);
        setPage(prevPage => prevPage + 1);
        // Wait for the list rendered
        setTimeout(() => { setIsLoadingProducts(false); }, 500);
        setIsLoadingProducts(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const categoriesFromRemote = await ServiceCategory.getAll();
            setCategories(categoriesFromRemote);
        };

        fetchData();
    }, [setCategories]);

    const renderProductHorizontal = useCallback(({ item }: { item: Product }) => {
        return (
            <ComponentHome.ProductHozirontal key={item._id} product={item} categories={categories} navigation={navigation} />
        );
    }, [categories, navigation]);

    const renderProductVeritcal = useCallback(({ item }: { item: Product }) => {
        return (
            <ComponentHome.ProductVertical key={item._id} product={item} categories={categories} navigation={navigation} />
        );
    }, [categories, navigation]);

    // ScrollView thay the boi FlatList nen vut di
    // Cac phan ben tren cua list dua vao header
    // Khong anh huong gi den layout
    const headerComponent = () => (
        <View style={styles.main}>
            {/* Header */}
            <View style={styles.container_header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../Image/user.png')} style={{ width: 45, height: 45 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[styles.text_header, { fontWeight: 'normal', color: '#8c8d8e' }]}>Thành viên</Text>
                        <Text style={styles.text_header}>Trần Công Minh</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <View style={styles.icon_header}>
                        <Image source={require('../Image/cart.png')} style={{ width: 30, height: 30 }} />
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <ComponentHome.Input_Screach input={search} event={setSearch} />
            </TouchableOpacity>

            {/* body  */}
            <ComponentHome.Text_Title text={'Special Offers'} />
            <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_hambuger.png')} text={'Hambuger'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_pizza.png')} text={'Pizza'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_noodles.png')} text={'Noodles'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_chicken.png')} text={'Chicken'} />
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_potato.png')} text={'Potato'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_drink.png')} text={'Drink'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_cake.png')} text={'Dessest'} />
                <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require('../Image/icon_more.png')} text={'More'} />
            </View>

            <ComponentHome.Text_Title text={'Discount Guaranteed!'} />

            <FlatList
                horizontal
                data={products.filter((product) => product.discount > 0)}
                renderItem={renderProductHorizontal}
                keyExtractor={(item) => item._id}
                onEndReachedThreshold={0.5}
                ListFooterComponent={isLoadingProduct ? <ActivityIndicator /> : null}
                showsHorizontalScrollIndicator={false}
            />

            <ComponentHome.Text_Title text={'Recommended For You'} />

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginBottom: 15 }}>
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_all.png')} text={'All'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_hambuger.png')} text={'Hambuger'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_pizza.png')} text={'Pizza'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_noodles.png')} text={'Noodles'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_chicken.png')} text={'Chicken'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_potato.png')} text={'Potato'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_drink.png')} text={'Drink'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_cake.png')} text={'Dessest'} />
                <ComponentHome.SelectCategoryProuctHozizontal icon={require('../Image/icon_more.png')} text={'More'} />
            </ScrollView>
        </View>);

    return (
        <View style={styles.main}>
            <FlatList
                data={products}
                renderItem={renderProductVeritcal}
                keyExtractor={(item) => item._id}
                onEndReached={loadMoreProduct}
                onEndReachedThreshold={0.1}
                ListHeaderComponent={headerComponent}
                ListFooterComponent={isLoadingProduct ? <ActivityIndicator /> : null}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
