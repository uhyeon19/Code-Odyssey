package code.odyssey.common.domain.problem.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@AllArgsConstructor
public enum SubmissionErrorCode {

    ALREADY_SUBMITTED("이미 제출한 코드입니다.", BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
