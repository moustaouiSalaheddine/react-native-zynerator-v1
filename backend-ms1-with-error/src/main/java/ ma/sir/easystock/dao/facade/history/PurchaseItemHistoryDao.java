package  ma.sir.easystock.dao.facade.history;

import  ma.sir.easystock.zynerator.repository.AbstractHistoryRepository;
import  ma.sir.easystock.bean.history.PurchaseItemHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseItemHistoryDao extends AbstractHistoryRepository<PurchaseItemHistory,Long> {

}
