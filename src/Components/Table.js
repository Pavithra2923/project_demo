import Table from 'react-bootstrap/Table';
import TabCompImg from './TabComponents';


function TableComponent() {
  return (
    <Table className='table table-borderless table-dark ' striped="row">
      <thead >
        <tr>
          <th  className='border'>Network Provider</th>
          <th className='border'>Balance</th>
          <th className='border'>As on</th>
        </tr>
      </thead>
      <tbody className='border'>
        <tr>
          <td  className='border_val'>{TabCompImg()}</td>
          <td className='border_val'></td>
         
        </tr>
        <tr >
        <td className='border_val'>{<img className='image_tab ' src='https://s3-alpha-sig.figma.com/img/ff81/1761/7892f08757b8b107057101280b34e907?Expires=1674432000&Signature=V1ixuDIu6YjVG-Lt85UZcR5oD4uRte7d~KGjwud772FTt0iFNTUxj45TAw97Ojtxln7ZPFOmRd~Tyhs4VukRdzce7eNNlbGlk0Mek1Woghlem0ibwq3fK7jX8p9XnJYbkTph4RXp9QPmichpYLcXz4crezZG~8Mw6RDO3pEjdcFZp-h0xkGOZ1uWOC230O-DPCFD12tzXPnSuKkjklkZ43uUxYGBIUkHrSk06481zL67WJ7aUDZV9pqDZrMWV5CM9eI2F9YLlLH-OG~GQleIprmuAFvkI4syq~tDb6QLpPoaO-zbdvUEW0WtX4~N-0tDxI2i4fGCTlev7Fn3esUwTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />}{<p className='table_content'>73457167(UEZM)</p>}</td>
        <td className='border_val'>1 million UGX</td>
        <td className='border_val'>5 mins ago</td>
          
        </tr>
        <tr>
          <td className='border_val'>{<img className='image_tab' src='https://s3-alpha-sig.figma.com/img/60b2/a8aa/1ad4c819600ac435662693dc95a6ba09?Expires=1674432000&Signature=n2yaj1oevKC5YkG3tdQ5Ps0wjds8VhcR-nudqO36Xlj9jdSFcOwPfU4D0SDa3vOMHB9ACgyu3XDZfTskWRt7gNlD8gtpNs-toFTT1h5evu678YXTYNcaEBy5MgXHZIvxvNBSSTJgzG3sBIhmgUZhV256J1OmEacXGF4yQYWkXwsBztYvLGap3pIMtn16pdIeCZJl-K-roAcE-EBtWvOL7v50IIYBE9sO6fRTrHK0c4hyDnZIDsnqhwEVoT2L~WWjJsg4eIazWPMRGaFmkCil75OaNe3oRM~tr~s1kSD5jQGk34NTR1E3u695hzsMYpo0L0zer3GAZm15uB4Ium-iew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />}{<p className='table_content'>810985(UMYN)</p>}</td>
          <td className='border_val'>2 million UGX</td>
          <td className='border_val'>2 mins ago</td>
        </tr>
        <tr>
            
            <td className='border_val'>{<img className='image_tab' src='https://s3-alpha-sig.figma.com/img/0dec/e44c/7ffbd1623c67fe953748e3d5c0b5c692?Expires=1674432000&Signature=Sp8TRIKctGCsFrmVwQVKyVrog1qnWAE7ki3UZK96EMECJRGjkKfBjmew~h5tIP7A0s0ct~DK-46tCCuipUhnsk55pED1vacWqfiyQk7mmrPfNhwQjcexxNA4zzye1NT0A1q09Ue8xPqvWOhMZcxxw~4G4wuoc8jexxMl-3fm2oN-vPOFgKbpBBATZTjY~849MzvypbW0AuTb5l05AMR2cTBK-E0RmrZs-dpXfvezkS9s2wtPbXNAZLBcIrKHmvNN41-4DkYyUoGagidKX-x6mjkNpZr~nvivqn7HnbuNFwD37~wWMD3rbZ81zj3PD-V37gvepkofh62wD2FwGjsc4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />}{<p className='table_content'>01063616833446</p>}</td>
        <td className='border_val'></td>
        <td className='border_val'></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;