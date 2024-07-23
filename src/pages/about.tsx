import { Button, Typography, Card, Divider } from "antd";
import React from 'react';
import { Link } from "react-router-dom";
import "swiper/css/bundle";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from 'styles/about.module.scss';

const { Title, Text } = Typography;

const About = (props: any) => {
  return (
    <div className={styles["container"]}>

<Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
        className={styles["swiper-container"]}
      >
        <SwiperSlide className={styles["swiper-slide"]}> 
          <div className={styles["swiper-slide"]}>
            <img
              src="https://intracen.org/sites/default/files/styles/content_full/public/media/image/media_image/2022/03/08/job-opportunities-02.jpg?itok=xJscdSNp"
             
              alt="Images"
            />
            <div className={styles["overlay"]}>
              <h2 >About Us</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["swiper-slide"]}>
            <img
              src="https://thumbs.dreamstime.com/z/jobs-17194309.jpg"
              alt="Images"
            />
            <div className={styles["overlay"]}>
              <h2 >About Us</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}> 
          <div className={styles["swiper-slide"]}>
            <img
              src="https://st2.depositphotos.com/3643473/6206/i/450/depositphotos_62060317-stock-illustration-person-with-megaphone-and-word.jpg"
             
              alt="Images"
            />
            <div className={styles["overlay"]}>
              <h2 >About Us</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}> 
          <div className={styles["swiper-slide"]}>
            <img
              src="https://mch.emory.edu/wp-content/uploads/2022/07/stock-photo-job-search.jpg"
             
              alt="Images"
            />
            <div className={styles["overlay"]}>
              <h2 >About Us</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}> 
          <div className={styles["swiper-slide"]}>
            <img
              src="https://etimg.etb2bimg.com/photo/90299337.cms"
             
              alt="Images"
            />
            <div className={styles["overlay"]}>
              <h2 >About Us</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


      <Card className={styles["card"]}>
        <Title level={2} className={styles["card-title"]}>
          Giới Thiệu Về Chúng Tôi
        </Title>
        <Text className={styles["card-text"]}>
          Chúng tôi là một đội ngũ đam mê trong lĩnh vực tuyển dụng và tìm việc làm, luôn nỗ lực mang đến cho bạn những cơ hội nghề nghiệp tốt nhất và trải nghiệm dịch vụ tuyển dụng chuyên nghiệp. Tại đây, chúng tôi chia sẻ các mẹo và bí quyết để bạn có thể tìm được công việc mơ ước một cách dễ dàng. Ngoài ra, chúng tôi còn cung cấp dịch vụ kết nối nhà tuyển dụng và ứng viên, giúp bạn tiếp cận những cơ hội việc làm phù hợp mà không cần tốn nhiều thời gian tìm kiếm.
        </Text>
      </Card>

      <Card className={styles["card"]}>
        <Title level={3} className={styles["card-title"]}>
          Chia Sẻ Kinh Nghiệm Tìm Việc
        </Title>
        <Text className={styles["card-text"]}>
          Tìm việc làm là niềm đam mê của chúng tôi, và chúng tôi muốn chia sẻ niềm đam mê đó với bạn. Mỗi bài viết, hướng dẫn được chia sẻ tại đây đều được chúng tôi nghiên cứu kỹ lưỡng, từ việc chuẩn bị hồ sơ xin việc đến cách trả lời phỏng vấn. Chúng tôi tin rằng việc tìm kiếm việc làm không chỉ là quá trình nộp đơn và chờ đợi, mà còn là một nghệ thuật, là cách để kết nối bạn với những cơ hội phát triển nghề nghiệp.
          <br />
          <br />
          Các kinh nghiệm chúng tôi chia sẻ rất đa dạng, từ những bước chuẩn bị cơ bản cho đến những kỹ năng nâng cao trong quá trình phỏng vấn. Bạn sẽ tìm thấy những lời khuyên hữu ích, các mẹo viết CV, cách tạo ấn tượng trong buổi phỏng vấn và nhiều hơn nữa. Mỗi hướng dẫn đều được trình bày chi tiết, giúp bạn dễ dàng áp dụng và đạt được kết quả tốt nhất.
        </Text>
      </Card>

      <Card className={styles["card"]}>
        <Title level={3} className={styles["card-title"]}>
          Dịch Vụ Tuyển Dụng
        </Title>
        <Text className={styles["card-text"]}>
          Nếu bạn không có nhiều thời gian hoặc không tự tin vào khả năng tìm việc của mình, hãy để chúng tôi giúp bạn. Chúng tôi cung cấp dịch vụ tuyển dụng với tiêu chí mang lại sự tiện lợi và chất lượng cao nhất cho cả nhà tuyển dụng và ứng viên. Mỗi cơ hội việc làm được chúng tôi lựa chọn từ những doanh nghiệp uy tín, tuân thủ nghiêm ngặt các tiêu chuẩn tuyển dụng chuyên nghiệp.
          <br />
          <br />
          Chúng tôi hiểu rằng mỗi cơ hội việc làm không chỉ là một công việc, mà còn là một bước tiến trong sự nghiệp. Vì vậy, chúng tôi luôn chú trọng đến sự phù hợp giữa ứng viên và nhà tuyển dụng. Bạn chỉ cần đăng ký thông tin qua website hoặc hotline, và chúng tôi sẽ giúp bạn kết nối với những cơ hội việc làm phù hợp nhất, đảm bảo bạn luôn có những lựa chọn tốt nhất.
        </Text>
      </Card>

      <Card className={styles["card"]}>
        <Title level={3} className={styles["card-title"]}>
          Sứ Mệnh và Tầm Nhìn
        </Title>
        <Text className={styles["card-text"]}>
          Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm tìm việc và tuyển dụng tuyệt vời nhất. Chúng tôi không ngừng nỗ lực để cải thiện chất lượng dịch vụ, nhằm đáp ứng mọi nhu cầu và mong muốn của khách hàng. Tầm nhìn của chúng tôi là trở thành một thương hiệu uy tín và được yêu thích nhất trong lĩnh vực tuyển dụng và tìm việc làm.
          <br />
          <br />
          Chúng tôi tin rằng công việc có thể kết nối mọi người lại với nhau, tạo ra những kỷ niệm đẹp và những bước tiến quan trọng trong sự nghiệp. Chính vì vậy, mỗi dịch vụ chúng tôi cung cấp đều chứa đựng sự tận tâm và chuyên nghiệp, với hy vọng mang lại niềm vui và sự hài lòng cho bạn.
        </Text>
      </Card>

      <Card className={`${styles["card"]} ${styles["text-center"]}`}>
        <div className={styles["content-wrapper"]}>
          <Title level={3} className={styles["card-title"]}>
            Liên hệ với chúng tôi:
          </Title>
          <Text className={styles["card-text"]}>
            Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, TP. HCM
          </Text>
          <br />
          <Text className={styles["card-text"]}>Hotline: 028 7105 9999</Text>
          <br />
          <Text className={styles["card-text"]}>Email: info@vlu.edu.vn</Text>
          <br />
          <Text className={styles["card-text"]}>
            Website:{" "}
            <a href="https://www.vlu.edu.vn" target="_blank" rel="noopener noreferrer" className={styles["website-link"]}>
              vlu.edu.vn
            </a>
          </Text>
        </div>
      </Card>

      <Card className={`${styles["card"]} ${styles["text-center"]}`}>
        <div className={styles["social-icons"]}>
          <a href="https://www.facebook.com/vanlanguniversity" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className={styles["social-icon"]} />
          </a>
          <a href="https://www.youtube.com/vanlanguniversity" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className={styles["social-icon"]} />
          </a>
          <a href="https://www.instagram.com/vanlanguniversity" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className={styles["social-icon"]} />
          </a>
        </div>
      </Card>
    </div>
  );
}

export default About;
