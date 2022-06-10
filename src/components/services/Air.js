import React from 'react'
import { BigTitle, SubHead } from '../Common/CommonItems'

function Air() {
  return (
    <div className=" inset-0 text-justify rounded-md text-gray-600  flex flex-col  transition-all ease-in-out duration-1000 transform translate-x-0 ">
        <BigTitle title='Air Export and Import'/>

        <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1 bg-gray-100 p-4 rounded'>
                    <SubHead title='Sky Cargo Services Highlights' />
                    <ul className=' ml-5 list-disc list-outside'>
                        <li>Time definite express service</li>
                        <li>Charter or part-charter</li>
                        <li>Consolidation and direct-to-consignee service</li>
                        <li>Accommodation of special cargoes such as refrigerated goods
                        </li>
                        <li>Door-to-door and airport-to-airport pricing options
                        </li>
                        <li>Personalized unpacking and rearranging services
                        </li>
                        <li>Pick-up</li>
                        <li>Palletization</li>
                        <li>Customs Clearance</li>
                        <li>Customs Declaration</li>
                        <li>Delivery at Destination</li>

                    </ul>
                </div>

                <div className='flex-1'>
                    <p> 
                    We are very competitive within the air freight industry and are able to offer a comprehensive range of airfreight and sky cargo services worldwide. We can offer “consolidations” “back to back” and even charter of aircraft if required. We are able to offer both door-to-door and the more typical arrival airport only variations to almost all parts of the globe. We are able to handle most hazardous commodities to most areas. We have an extensive network of agents in place worldwide, to ensure smooth Customs clearance and delivery locally almost anywhere. With a wide network of freight forwarders at all major Airports, we can offer a comprehensive Air / Sky Cargo Service to the Importers & Exporters of high value cargo, perishable cargo, project cargo & ship spares.
                    </p><p>
                       
                    Master Movers works diligently with our customers to control delivery-cycle time and increase order visibility. We are appointed the agent of various carriers that furnishes different choices of routing, schedule and competitive rates to various destinations for the customers. Our sophisticated experience in the industry can respond to an ever changing logistics environment and increasing logistics demands in sky cargo services. 
                     </p>
                </div>
               
            </div>

            <div className='flex bg-gray-1  00 rounded flex-col lg:flex-row gap-4 items-center my-4'>
            <div className='flex flex-1 justify-center'>
                <img className='h-48' src='https://mastermovers.ae/wp-content/uploads/2021/06/Warehouse-Storage-solutions.png' alt='air moving with master'/>
                </div>
        <div className='flex-1  p-4 rounded'>
                    <SubHead title='Customer Benefits' />
                    <ul className=' ml-5 list-disc list-outside'>
                        <li>No weight or size restrictions (subject to aircraft)</li>
                        <li>Clear transit time statement</li>
                        <li>Full shipment tracking visibility</li>
                        <li>e-Quotation and e-Booking (subject to local availability)
                        </li>
                        <li>Express / Wheels Up customs clearance (where Customs permit)
                        </li>
                        
                    </ul>
                </div>

            
               
            </div>
    </div>
  )
}

export default Air