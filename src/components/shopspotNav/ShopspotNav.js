import {
    HeaderView,
    HeaderLeftView,
    HeaderRightView,
    UlContainer,
    IconView,
    MarketView,
    ArticleView,
    SerachView,
    SerachContainer,
    SerachDropDown,
    SerachButton
} from './ShopspotNavStyle';

export const Header = () => (
    <HeaderView>
        <HeaderLeftView>
            <UlContainer>
                <IconView >
                    <a>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABGCAYAAAAQNsDGAAAAAXNSR0IArs4c6QAAD5VJREFUeAHtXAmc1GUZfuba2Z3Zg93lPkRUFNS0MpXUNDOMPDq0sp+lZYYdiGXmUZoX4IEH/KQyKzP9JWpZKmVqeVCakkcGKiAkcsqeLLs7O/fR87wzswwkw7K7ajO//ws7zMz3/d/v+97nPZ73W3+6Vh40PgNHSt4C7pI/gXMAs4ADZJk4ggOkA2SZWKBMjuFEpANkmVigTI7hRKQDZJlYoEyO4USkA2SZWKBMjuFEpANkmVigTI7hRKQDZJlYoEyO4USkA2SZWKBMjuFEpANkmVigTI7hRKQDZJlYoEyO4USkA2SZWKBMjvHuR2TG+a8v3wnf8Q6WUpcUEaOMXiQu+6b3fSaRQCYWg8vrhcvnA9zvvg9lN1Oer4MDZDqNdDwGpAiiz5MFNJUkaD64KiqQSSbgHT4S9V/4Mnx77oXWedciuWk9wPH3SjLJJORcyKRtv3I8F53L5a+gE76LTqYMVej0/TTIwIGUMRhhwaOO5c9H4Rs9BplUGrFVKxFa/FfEXn+NQKbQ8JVz0PDVc2ybW++7C4l1bxrQ/dz3gB5LRyPwDRuBwJSj4N93Ep3Nj2RbKyJL/4Xo0pcAOuY7nTEy8bg5ksvHDMX1ByoDA5KR5hk6DCOvvhHVH/0495JBqmMLPLVDgBM+jYbpM9A861IIOC/nSXQAvId1MhOLombqCRh+4RWoGL+n7anwpWPhr9E85zIGCUvDIERKoe7e98wGFXvvg7rPnGZO0/bTm7POM4D1+p9DCEYmnUHjt75rIEZeXYq1nz8Ba6YdhTdPmYrux/4ET7AadSd+lt7tYVQme8/xjrzpg3NYih81BiMvv85A3Prb32DDN8/Aphlnof2O2+hkMQQO/bDV8V5n64Pe3TqP9BGw4Rf8CI1fn4Hak0/JpnKl+AFIvyNSwFTssSdqP/lpW77jrl8g/NzT8AypR2zFq9h86fkIv/RPRJb9O+vYb+NtMlweYJeHKca/fYqR4bN1jIfnXylyeTxWd00pg0ZpXFHmYl0TicqkUlaTjWppTX6nWi3JJJIIHn4U6/UIRFdyjz+6gHU9ZYbseuyP6H7kIepixrDvXMhEwshQr5sELZOWXjpjfh8ibRXSayuZfltD6yeoQ+k5B5qLjiyuAO4d1JGmLncdsxYlHeYaWodndVdWco50apHdk34DqY166hvgDgZtRd8eE3hovqVnuaoCZtwtv7rVjCumWigZkSPWqcAhU1hXjyHp8SK85BnWqJdoNJIj6shw3Dt2D845HP799jeQE+vXZevYKy9na5jHDU91Dao/9TlUHXIYuh9+CMnmzQgeO5XpvQ7xtWvQ8+zfkHxrI1wyEg3k5vcS75AG+Mbtifgbq6gjYPqiy6hXzmJ1q9KctIp1VNkl2dyE6qM/Zs8nN29Ez/PPIr5qRba+5Ri4HMpdXYsA+ULlgQfBQ7BSHR0IL2Pt/dfzSIVC8DYORfXhR9q/2oenpha1nzrVnCey/FUkN6zNAq7B3ZDtLbwbD8LrQXzDOv6sh3+vfdD4lelIb+1A15/+gGRrixnOzdQqr1Tk9Yq8lF47dOaFGP79y7Z9fc552HT+NxB64hEDtu7U0zH0vIvgGzUaaXksPddDIygqOh+6H603zkKCADWcfhaGX3KV6ana/0B4ho2Em1GYByyxeRNabr4GXYvut6iNrnzN9uQdORrjfvJrtN06D91PPMqoiGQjgkCmwz2o/cTJGDV3gekNHnYEnbbeosxNxxHY6VA32u/6Jdp/chM/MnoJYtUHD8OIy65B5QHvs+eSrc3wklRJlJ02X3wePw/HmPk/t+/0ouwweu6PecYINs74KhJrVlvW6Z3Qxzeec0cMubKPc7ebJqqe7uxEpqcHNR+fxoipNI8VE5TIg1Nb2rP1hhEoglE5aX8C0mMGaTx7Bjof/B3CLzxH7z3YUo+M0/nwg9RzHMbc9DOm6SHoYbreOP1LaP/FAjtskN5cecBBFundjz1sawdoaImnYSja5l+H5tk/RM/Ti+GfOMmcrPqIo/n5SSTbW5FqaaZzjEHl5AONgNVOO5lzJhpJE5O2lEhHC0452s5jehnFbbfOR9PlF6Lr4QfM+P59JyPIehp/YzWizBA+OtDo+beZXmWOTTO/hpYb5yBCAINc37/Pvqg68P3Yev9C9Cz5O6oOPsQiVmA3XXExttz9S0RfftHOZYfZzZd+A6l1lDKjy19hi7ECvjHj4Bs5Cj72izXHfQK1BM7l8yO64hWmSTLFaSehUimStbDqoA8yomaj6epLmPY2kL19gdFQZakw9Jc/k4xcy4NPRLqrC29975tsZVYoK7IG/x3+ye8zo/gn7ofuPz9EsPYzQ2k/ArZl9qUWHbHVKxBf/TrqTj4V7kDQHK3nyb9oGnqeWUzdnWZ0N8uAjKz0ppofY8QmW5oQ+MBhqD7mOJsfeuIxNBPEdKTHskB4ybOoJStXWvSOGYsuZoghXzwTdUzxkuarf4iuRx40UGQfN+ts8CPHmgPF176Bzt/ejdqTPms2S27ejKYrL0Ji04ZsHTUNu//Sf9aqtVRP2EB3PboIG6afjtZb5iK+fq3twjduPFPeFRj2nYstlZmna4Tga9Odv78HHhrRXZWtsRoSUVHdVW8nia1ZxbnrCUQg66lMy1HWG4nStn/SAUy1JCs5ia9eyQHuicRCRo7953VL/xoO0Hk8jY18x0LO3rf9Z/ONsYYef9SeloPJoUZdvwDumjrbiw3wJapemH/U78kpkm0tiL62zIYVzd7RY1H1/kPss1JkhM5rzsPyozOqP1XqlVQyEt3VLDm5umr75fnczGgDkYEBqTDhXxGedDiEtltuwLrTTrS6o+s4Sf2Xz2btODTbP+Z2qnSZZD1Vnd1OmILdBEDRKUmyJ82y2hwz5OFTjNK8qN7ImfJiPWr+g+pYLIJ0T8i+EUt0B1SzCTz1aB05xcZzz8JbF81kFDbbvABJU+1Jp2xX120PBevobWrLFpvv8tFpSJzyNTnd000P5NkZhbINSMhSoS7uJWsPLx1VTjPYMiAgRecVaXaHSoqtKEl1bmXanIPQPxbbXpV+ffRYRVteYoocGXQH6p4lDdtaEgHqYoT1CiPSXdCipMkCs9bKzSiYKpLltivCbEuTIajW7pB4yahqa1TX1UJ03Hsn2m+7pXcZ/94Tt3OQQmexSdTtqSHpkfBcBp4uOih2S0PwrPXQF+y19V2euStixdr/R2RH3ZL1U/oNpMCr/tjxGHf7fawXn7GIMyLDg8mDRYIkGd65qiVQL5UXEY7e+0zz9CwCGYKm4p9Pz6pdnoZh2b6MxgN7Rv+kyaZGvVr09eVUU3AEJQiuLecS01X7UsEUL4mK2nPd+i+ehVGzb4aXhEfkygBlu6N0nxd7r/UKJXelpp7PM3S4pUgNq+YlyN6j7J0lansqxu+VTaXUoZSqUqFaLDHOwL1v2zfnsNVSydH1Zq8D2Oy+vxRYoe8PaaYMVjv1RAQOPwKjbliAkbNuROBIsjMSmvozzkYwRxQiZGJiddYQ60F5MFsJOwhBNMPnos5dme0/xQwlou51p53Bd2oJwggeeQxvkY63sfDzz5FkLbeG377QC/WIbOkCwDtiFBqnz2QKzUaO2KK7qgqN3z4fQz5/Osb9+HbU0AErJkykQ05Dw9e/bWqS7PtCJEX5CNKXcjPfPvuZTh9rotomMzq/3/qHey3ddz2yCOluplVKPVsiMehMmL0w25z6086kEhdSW7cg9BR1M7Xma7v6zqqDP4Rh3/0Bxt1xPzkC67iccTel38laB9Uhqj40hexrLI3zJfspXD/84j9JrS9CSsDpZkPC2410QvUie0uTYLQqAqvYgtRM/SSNfy46Ft4JH6Op8WvfwtBzZqKaAKZYU9V6yHMjL79g96G6DdGNTl48jcMw7k4ag1EhQuGpq7e03/bTeehZ/DjR4J4fuBfDZlxg7HfsgtstevPEI/7mGrRcfwXi6uWOPzGvlmv6MGbez+GfsDfTMdNk7gap4+47sPWeOy3NRl9biqarLsGIS2ejmhcSExY9SbK1mkx9Mh1gpGWlzZddaExalyYR1ufAoVOslRl/zyJbK8ZWxm6Ftq3c53f9bj8EZIJpJfzcM+ZtijQ11brJEOXuWHgHWm+YhWTTW2Z8sUj1b9FXlqLzj7+3aymBqmcS69+0VKe0KoPHaMjwkqfNEMq8Pnq1t6GRn1eR7S5Ey9yr2bZsskgJsm8NCGBK6Cn+toWtin/8BKbNkPWgrfOuQ+cD95nxVYPDLyxBfN3abG1nShN5Ui/YxVam5drLEf33i7ZfRUlv+/H0Uwg/85Q5V5rEJcI5Yui6lrTLdV0b0kliy5ch8uISS48iQD4CmOrssJuhlrmzOPYsb71Y97kPMWojSHyvC5TQ3x5H6/VXIdHEW6jclaIdqo8vroH+D5Ps1zGsg24VdLFC3iOKwar2GKXW/SJFKVR1UneWllYLapvd/CiyeCgXvRXsP+W16j+NnouUKJL5OUtSKiw9pbu7mJIusRsgrdF60xy0zLvGWKQiHrrzpNgdLnVLstd//AU307AYpyLcGLaIhu5l+SOm23DmNzDi8jn2TNuCG6zvBdm5W2mRc6XHiFdBRtBkY6cakz2oX/ZJx3kXzOd6s5K2kqCdmFGU7mUz24M5RC5z2cp9f+l3as0voc25wMVV2AmggSG2KCMViNUcHlCAaE6hGNPjmBnfpS2RaNBA8l4r/mJ0/DFj0NA7E7ucFuh5JxHD3XGtQr1aSQ5GMJV2bf23Uy7QlVI1T7N05h305h/Lsmrun2zV0iT9M0908nOsLWHr5fZykJnMbGZ3wdvbpXd+H95kd9aHibucooPlom+nc3fw3u3m/c9YjjVK706MZs8XsuEoa/Gu5ucXzencGSCFLDsdUwRqG9vqcV7N2//LPRP8XUtf5+1a0+ABueu1Bn8GHUfUX+2N2HE3b2kGekNim6RzxFmrku1trLnLeZH/qKXcwT/A4GkccI0cvK30UxPTqCdYQ5LVbhkrn/76qS33GMNPeklYdPFvdblISh/YWoPzdGlHpGzAGpMkiPYL52IpeLfsxZTHywddnlvd/T8HUUcrfSAJ3uBE4Q5Im96dE6sdZr/nH/tavd/zjTobKG4BB8ji9imZUQfIkoGq+EYdIIvbp2RGHSBLBqriG3WALG6fkhl1gCwZqIpv1AGyuH1KZtQBsmSgKr5RB8ji9imZUQfIkoGq+EYdIIvbp2RGHSBLBqriG3WALG6fkhl1gCwZqIpv1AGyuH1KZtQBsmSgKr5RB8ji9imZUQfIkoGq+EYdIIvbp2RGHSBLBqriG3WALG6fkhn9L9ylK81hrO4XAAAAAElFTkSuQmCC" />
                    </a>
                </IconView>
                
                 <MarketView>
                      <a> 
                        <div>
                            <img src= "www.googl"/>
                            <span>Market</span>  
                        </div>
                    </a> 
                 </MarketView>

               <ArticleView>
                      <a> 
                        <div>
                            <img src= "www.googl"/>
                            <span>Article</span>  
                        </div>
                    </a> 
                 </ArticleView>

                <SerachView>
                    <SerachContainer>
                        <SerachDropDown>
                            <SerachButton>
                            </SerachButton>
                        </SerachDropDown>
                    </SerachContainer>
                 </SerachView>
            </UlContainer>
        </HeaderLeftView>
        <HeaderRightView>
        </HeaderRightView>
    </HeaderView>
)

export default Header;