
export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home Run'
    };

    constructor(props) {
        super(props);
        this.title = '???';
        this.state = {
            categories: [
                { id: 1, name: 'Đồng hồ' },
                { id: 2, name: 'Cá Voi' },
                { id: 3, name: 'Cá Voi Xanh' },
            ]
        };
    }

    // componentDidMount() {
    //     axios.get('http://localhost:3000/categories')
    //     .then(res => {
    //         this.setState({
    //             categories: res.data
    //         })
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }

    render() {
        // const { navigation } = this.props;
        // const { categories } = this.state;
        return (
            <View>
                gg
            </View>
        );
    }
}