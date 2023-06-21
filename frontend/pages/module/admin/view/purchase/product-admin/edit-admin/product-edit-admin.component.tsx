import { InputTextarea } from 'primereact/inputtextarea';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarChangeEvent} from 'primereact/calendar';
import { format } from 'date-fns';
import {InputNumberChangeEvent} from 'primereact/inputnumber';
import { InputSwitch } from "primereact/inputswitch";
import {MultiSelect} from "primereact/multiselect";

import {MessageService} from "/pages/controller/service/MessageService";

import {ProductService} from '/pages/controller/service/Product.service';

import  {ProductDto}  from '/pages/controller/model/Product.model';

const Edit = ({visible, onClose, showToast, selectedItem, update}) => {

    const emptyItem = new ProductDto();

      const [submitted, setSubmitted] = useState(false);
      const [activeIndex, setActiveIndex] = useState<number>(0);
      const [activeTab, setActiveTab] = useState(0);
      const [item, setItem] = useState<ProductDto>(selectedItem || emptyItem);



       useEffect(() => {
        const fetchData = async () => {
         try {
          // if pojo = Commande this line must dispolay client (in command), product(in commanandItem)
          const [] = await Promise.all<>([
            ]);

            } catch (error) {
           console.error(error);
         }
          };

          fetchData();
           }, []);

        useEffect(() => {
              setItem(selectedItem ? { ...selectedItem } : { ...emptyItem });

          }, [selectedItem]);

        const onDropdownChange = (e, field) => {
               setItem((prevState) => ({
                       ...prevState,
               [field]: e.value,
                }));
           };


          const onTabChange = (e: { index: number }) => {
                  setActiveIndex(e.index);
          };

         const hideDialog = () => {
                     setSubmitted(false);
                     onClose();
             };

      const saveItem = async () => {
            setSubmitted(true);
            let _item = {...item};
             try {
                 if (_item.id) {
                 await ProductService.update(_item).then((response) => {
                     console.log(response.data);
                     update(response.data);
                     onClose();
                     })

                 MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });

                 }
                  } catch (error) {
                  console.log(error);
                  MessageService.showToast(showToast, { severity: 'Error', summary: 'Error', detail: 'Failed to save product', life: 3000 });

                        }
                    };


             const itemDialogFooter = (
                     <>
                             <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog}/>
                             <Button label="Save" icon="pi pi-check" text onClick={saveItem}/>
                     </>
                 );

    return(
    <Dialog visible={visible} style={{width: '70vw'}} header="Product" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
    <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
    <TabPanel header="Product">
        <div className="formgrid grid">

                <div className="field col-6">
                    <label htmlFor="code">Code</label>
                    <InputText id="code" value={item ? item.code : ''} onChange={(e) => onInputTextChange(e, 'code')} required autoFocus
                    className={classNames({'p-invalid': submitted && !item.code})}/>
                    {submitted && !item.code &&
                    <small className="p-invalid">Code is required.</small>}
                </div>



                <div className="field col-6">
                    <label htmlFor="reference">Reference</label>
                    <InputText id="reference" value={item ? item.reference : ''} onChange={(e) => onInputTextChange(e, 'reference')} required autoFocus
                    className={classNames({'p-invalid': submitted && !item.reference})}/>
                    {submitted && !item.reference &&
                    <small className="p-invalid">Reference is required.</small>}
                </div>



            </div>
    </TabPanel>

    </TabView>

    </Dialog>


    );

    };
export default Edit;

