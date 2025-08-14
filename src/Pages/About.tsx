import { FaHouse, FaDollarSign, FaBagShopping, FaMoneyCheckDollar, FaInstagram, FaTwitter, FaLinkedin, FaCar, FaHeadphones, FaCheck  } from "react-icons/fa6"
import { ScrollSection } from "./Framer"

export const About = ()=> {

    const icons = [ <FaHouse/>, <FaDollarSign/>, <FaBagShopping/>, <FaMoneyCheckDollar/>, <FaInstagram/>, <FaTwitter/>, <FaLinkedin/>, <FaCar/>, <FaHeadphones/>, <FaCheck/>]
    
          const About = {
             
                House: {
                icon: icons[0],
                numbers: "10.5k",
                desc: "Sallers active at our site"
                },
    
                Dollar: {
                icon: icons[1],
                numbers: "33k",
                desc: "Monthly product sale"
                },
    
                Cliets: {
                icon: icons[2],
                numbers: "45.5k",
                desc: "Customers actie in our site"
                },
                Money: {
                icon: icons[3],
                numbers: "25k",
                desc: "Annual gross sale in our site"
                }
            
          }

          const Team ={
            Tom: {
                img: "/Man in blue shirt.png",
                name: "Tom Cruise",
                position: "Founder & Chairman",
                socials: [icons[4], icons[5], icons[6]]
            },
            Watson: {
                img: "/Girl in black suit.png",
                name: "Emma Watson",
                position: "Managing Director",
                socials: [icons[4], icons[5], icons[6]]
            },
            Smith: {
                img: "/Man in black suit.png",
                name: "Will Smith",
                position: "Product Designer",
                socials: [icons[4], icons[5], icons[6]]
            }
          }

          const guarantees = {
         
            Cars: {
            icon: icons[7],
            hint: "FREE AND FAST DELIVERY",
            goal: "Free delivery for all oders over $140"
            },

            Headphone: {
            icon: icons[8],
            hint: "24/7 CUSTOMER SERVICE",
            goal: "Friendly 24/7 customer support"
            },

            Check: {
            icon: icons[9],
            hint: "MONEY BACK GUARANTEE",
            goal: "We rerun money within 30 days"
            }
        
      }


    return( 
        <>
        <section className="about p-4 mt-20">

            <ScrollSection>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="story">
                <h1 className="font-bold text-2xl">Our Story</h1>
                <p>
                    Launched in 2016, Exclusive is USA's premier online shopping place with an active presence in Nigeria. Supported by wide range of tailored marketing, data and service solutions. 
                    Exclusive has 10,500 sallers and 300 brands and serves 3 millions customers across the region.
                </p>
                <p>
                    Exclusive has more than 1 Million products to offer, growing at a very fast.
                    Exclusive offers a diverse assotment in categories ranging from consumers.
                </p>
                </div>
                <img src="/Two girls shopping.png" className="max-w-[400px] lg:max-w-[500px]"/>
            </div>
            </ScrollSection>

            <ScrollSection delay={0.2}>
            <div className="descriptions">

            {Object.entries(About).map(([key, value])=>(
                <div key={key} className="desc">
                    <div>{value.icon}</div>
                    <div>{value.numbers}</div>
                    <div>{value.desc}</div>
                  </div>
            ))}

            </div>
            </ScrollSection>

            <ScrollSection delay={0.2}>
            <div className="team">
                {Object.entries(Team).map(([key, value])=>(
                    <div key={key}>
                        <img src={value.img} className=" max-w-[auto] object-contain"/>

                        <p className="font-bold">{value.name}</p>
                        <p className="text-[10px]">{value.position}</p>
                        <div className="flex gap-2">
                            {value.socials.map((icon, i) => (
                           <span key={i} className="text-[10px]">{icon}</span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            </ScrollSection>

            <ScrollSection delay={0.2}>
            <div className="descriptions">
                {Object.entries(guarantees).map(([key, value]) => (
                  <div key={key} className="desc">
                    <div>{value.icon}</div>
                    <div>{value.hint}</div>
                    <div>{value.goal}</div>
                  </div>
                ))}
            </div>
            </ScrollSection>

        </section>

        </>
    )
}