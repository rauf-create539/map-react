import ManilaDetail from './ManilaDetail';
import QuezonDetail from './QuezonDetail';
import BaguioDetail from './BaguioDetail';
import CebuDetail from './CebuDetail';
import TaclobanDetail from './TaclobanDetail';
import IloiloDetail from './IloIloDetail';
import DavaoDetail from './DavaoDetail';
import ButuanDetail from './ButuanDetail';
import GeneralSantosDetail from './GeneralSantosDetail';
import ZamboangaDetail from './ZamboangaDetail';
import CagayanDetail from './CagayanDetail';

// Map city IDs to their detail objects
const cityDetails = {
  1: ManilaDetail,
  2: QuezonDetail,
  3: BaguioDetail,
  4: CebuDetail,
  5: TaclobanDetail,
  6: IloiloDetail,
  7: DavaoDetail,
  8: ButuanDetail,
  9: GeneralSantosDetail,
  10: ZamboangaDetail,
  11: CagayanDetail
};

export default cityDetails;